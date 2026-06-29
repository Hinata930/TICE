import { FarmingData } from "@/app/lib/types/farming";

type Props = {
  farming: FarmingData;
};



export default function FarmingTile({farming}: Props) {

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {farming.tiles.map((tile) => (
          <button
            key={tile.id}
            className="flex items-center justify-center rounded-lg w-12 h-12 bg-neutral-300 active:bg-neutral-400"
          >
            {`${tile.crop?.displayName ?? "虚"}`}
          </button>
        ))

        }
      </div>
    </>
  );
}