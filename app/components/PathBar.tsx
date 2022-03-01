import {
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import { ColumnViewNode } from "~/useColumnView";
import { Body } from "./Primitives/Body";
import {
  useJsonColumnViewAPI,
  useJsonColumnViewState,
} from "../hooks/useJsonColumnView";
import { useHotkeys } from "react-hotkeys-hook";

export function PathBar() {
  const { selectedNodes, highlightedNodeId } = useJsonColumnViewState();

  return (
    <PathBarLink
      selectedNodes={selectedNodes}
      highlightedNodeId={highlightedNodeId}
    />
  );
}

export type PathBarLinkProps = {
  selectedNodes: ColumnViewNode[];
  highlightedNodeId?: string;
};

export function PathBarLink({
  selectedNodes,
  highlightedNodeId,
}: PathBarLinkProps) {
  const { goToNodeId } = useJsonColumnViewAPI();

  return (
    <div className="flex flex-shrink-0 flex-grow-0 overflow-x-hidden">
      {selectedNodes.map((node, index) => {
        return (
          <div
            className="flex items-center min-w-0"
            style={{ flexShrink: 1 }}
            key={node.id}
          >
            <div
              className={`flex items-center hover:cursor-pointer min-w-0 transition ${
                highlightedNodeId === node.id
                  ? "text-slate-700 bg-slate-300 px-2 py-[3px] rounded-sm dark:text-white dark:bg-slate-700"
                  : "hover:bg-slate-300 px-2 py-[3px] rounded-sm transition dark:hover:bg-white dark:hover:bg-opacity-[5%]"
              }`}
              style={{ flexShrink: 1 }}
              onClick={() => goToNodeId(node.id)}
            >
              <div className="w-4 flex-shrink-[0.5] flex-grow-0 flex-col justify-items-center whitespace-nowrap overflow-x-hidden transition dark:text-slate-400">
                {node.icon && <node.icon className="h-3 w-3" />}
              </div>
              <Body className="flex-shrink flex-grow-0 whitespace-nowrap overflow-x-hidden text-ellipsis transition dark:text-slate-400">
                {node.title}
              </Body>
            </div>

            {index == selectedNodes.length - 1 ? (
              <></>
            ) : (
              <ChevronRightIcon className="flex-grow-0 flex-shrink-[0.5] w-4 h-4 text-slate-400 whitespace-nowrap overflow-x-hidden" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function PathHistoryControls() {
  const { canGoBack, canGoForward } = useJsonColumnViewState();
  const { goBack, goForward } = useJsonColumnViewAPI();

  useHotkeys(
    "[",
    () => {
      goBack();
    },
    [goBack]
  );

  useHotkeys(
    "]",
    () => {
      goForward();
    },
    [goForward]
  );

  return (
    <div className="flex h-full">
      <button
        className="flex justify-center items-center w-[26px] h-[26px] disabled:text-slate-400 disabled:text-opacity-50 text-slate-700 hover:bg-slate-300 hover:disabled:bg-transparent rounded-sm transition dark:disabled:text-slate-700 dark:text-slate-400 dark:hover:bg-white dark:hover:bg-opacity-[5%] dark:hover:disabled:bg-transparent"
        disabled={!canGoBack}
        onClick={goBack}
      >
        <ArrowLeftIcon className="w-5 h-6" />
      </button>
      <button
        className="flex justify-center items-center w-[26px] h-[26px] disabled:text-slate-400 disabled:text-opacity-50 text-slate-700 hover:bg-slate-300 hover:disabled:bg-transparent rounded-sm transition dark:disabled:text-slate-700 dark:text-slate-400 dark:hover:bg-white dark:hover:bg-opacity-[5%] dark:hover:disabled:bg-transparent"
        disabled={!canGoForward}
        onClick={goForward}
      >
        <ArrowRightIcon className="w-5 h-6" />
      </button>
    </div>
  );
}
