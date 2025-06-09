import Counter from "@/components/ui/counter";

interface StatisticCounterProps {
  targetValue: number;
  suffix?: string;
}

export function StatisticCounter({
  targetValue,
  suffix,
}: StatisticCounterProps) {
  return (
    <div className="text-[3em] md:text-[2.8em] xl:text-[4em] leading-[1.1em] font-medium font-figtree">
      <Counter direction="up" targetValue={targetValue} />
      <span>{suffix}</span>
    </div>
  );
}
