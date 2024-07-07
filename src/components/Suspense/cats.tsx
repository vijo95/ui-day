import useSWR from "swr";

const API_URL = "https://catfact.ninja/fact";

export default function Cats() {
  const fetcher = (...args: unknown[]) =>
    fetch(...args).then((res) => res.json());
  const { data } = useSWR(API_URL, fetcher, { suspense: true });

  return (
    <div>
      <span>{data.fact}</span>
    </div>
  );
}
