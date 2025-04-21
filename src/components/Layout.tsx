import Tab from "./Tab";
import styled from "styled-components";
import { tabs } from "../data/constants.tsx";
import { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Tooltip } from "./Tooltip";
import {
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { TabProps } from "../data/types";
import { useNavigate } from "react-router-dom";
import { OverflowDropdown } from "./OverflowDropdown";

const TabDivider = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.1);

  &:last-child {
    box-shadow: none;
  }
`;
import {
  FixedSidebar,
  ContentWrapper,
  Header,
  Nav,
  Main,
} from "./LayoutStyles";

const Layout = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");
  const [pinnedTabs, setPinnedTabs] = useState<string[]>([]);
  const [tabsWithId, setTabsWithId] = useState<TabProps[]>([]);
  const navigate = useNavigate();

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);
  const [overflowTabs, setOverflowTabs] = useState<string[]>([]);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedPinnedTabs = localStorage.getItem("pinnedTabs");
    const storedOrderedTabs = localStorage.getItem("tabsPlaces");
    const storeActiveTab = localStorage.getItem("activeTab");

    if (storeActiveTab) {
      setActiveTab(storeActiveTab);
    }

    if (storedOrderedTabs?.length !== 0 && storedOrderedTabs !== null) {
      setTabsWithId(JSON.parse(storedOrderedTabs));
    } else {
      const initialTabs = tabs.map((tab, index) => ({
        ...tab,
        id: index,
        active: false,
      }));
      setTabsWithId(initialTabs);
      localStorage.setItem("tabsPlaces", JSON.stringify(initialTabs));
    }
    if (storedPinnedTabs) {
      setPinnedTabs(JSON.parse(storedPinnedTabs));
    }
  }, []);

  const togglePin = (name: string) => {
    setPinnedTabs((prev) => {
      const newPinned = prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name];

      localStorage.setItem("pinnedTabs", JSON.stringify(newPinned));
      return newPinned;
    });
  };

  const pinned = tabsWithId.filter((tab) =>
    pinnedTabs.includes(tab.name ?? "")
  );
  const unpinned = tabsWithId.filter(
    (tab) => !pinnedTabs.includes(tab.name ?? "")
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = tabsWithId.findIndex((tab) => tab.id === active.id);
      const newIndex = tabsWithId.findIndex((tab) => tab.id === over.id);
      const newTabs = arrayMove(tabsWithId, oldIndex, newIndex);
      setTabsWithId(newTabs);
      localStorage.setItem("tabsPlaces", JSON.stringify(newTabs));
    }
  };
  const allTabs = [...pinned, ...unpinned];

  useEffect(() => {
    const checkOverflow = () => {
      const nav = navRef.current;
      if (!nav) return;

      const children = Array.from(nav.children) as HTMLElement[];
      const navWidth = nav.offsetWidth;

      let total = 0;
      const overflowed: string[] = [];

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        total += child.offsetWidth;

        if (total > navWidth - 10) {
          const name = allTabs[i]?.name;
          if (name) overflowed.push(name);
        }
      }

      setOverflowTabs(overflowed);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [pinnedTabs, allTabs.length]);

  return (
    <div>
      <FixedSidebar />
      <ContentWrapper>
        <Header />
        <Nav ref={navRef}>
          <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <SortableContext items={[...pinned, ...unpinned]}>
              {allTabs
                .filter((tab) => !overflowTabs.includes(tab.name ?? ""))
                .map((tab) => {
                  const isPinned = pinnedTabs.includes(tab.name ?? "");
                  return (
                    <TabDivider key={`tooltip-wrapper-${tab.name}`}>
                      <Tooltip
                        message={isPinned ? "" : "Tab anpinnen"}
                        image={{ src: "/images/pin-icon.svg", alt: "pin icon" }}
                        onClick={() => togglePin(tab.name ?? "")}
                      >
                        <Tab
                          id={tab.id}
                          key={tab.name}
                          name={isPinned ? undefined : tab.name}
                          image={{ src: tab.image.src, alt: tab.image.alt }}
                          onClick={() => {
                            setActiveTab(tab.name ?? "");
                            localStorage.setItem("activeTab", tab.name ?? "");
                            navigate(tab.path ?? "");
                          }}
                          active={activeTab === tab.name}
                          pinned={isPinned}
                        />
                      </Tooltip>
                    </TabDivider>
                  );
                })}

              {overflowTabs.length > 0 && (
                <TabDivider>
                  <OverflowDropdown
                    overflowTabs={overflowTabs}
                    pinnedTabs={pinnedTabs}
                    togglePin={togglePin}
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                  />
                </TabDivider>
              )}
            </SortableContext>
          </DndContext>
        </Nav>
        <Main>
          <Outlet />
        </Main>
      </ContentWrapper>
    </div>
  );
};

export default Layout;
