import { TreeIcon } from "~/components/Icons/TreeIcon";
import { LargeTitle } from "~/components/Primitives/LargeTitle";
import { Body } from "~/components/Primitives/Body";

export default function Terminal() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center max-w-[300px] rounded text-center bg-slate-200 shadow border-slate-100 border-[10px] border-solid py-16 px-16 transition dark:bg-slate-700 dark:border-slate-500">
        <TreeIcon className="text-indigo-500 transition dark:text-white w-8 mb-2" />
        <LargeTitle className="text-gray-900 transition dark:text-white">
          Tree View
        </LargeTitle>
        <Body className="text-gray-700 transition dark:text-white">
          Coming soon
        </Body>
      </div>
    </div>
  );
}
