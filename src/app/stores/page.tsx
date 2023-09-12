import { getAllStores } from "@/lib/api/stores";
import StoresTable from "../../components/storesTable";

export default async function Stores() {
  const data = await getAllStores();

  return (
    <>
      <StoresTable stores={data} />
    </>
  );
}
