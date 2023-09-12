import StoresForm from "../../../components/storesForm";
import { getStore } from "@/lib/api/stores";

export default async function Store({ params }: { params: { id: number } }) {
  // Fetch data for this store
  const data = await getStore(params.id);

  return <StoresForm store={data} />;
}
