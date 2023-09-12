"use client";

import { useState } from "react";
import { addStore } from "@/lib/api/stores";

export default function Page() {
  const [storeData, setStoreData] = useState({
    name: "",
    address: {
      addr1: "",
      town: "",
      county: "",
      postcode: "",
    },
    location: {
      latitude: "",
      longitude: "",
    },
  });

  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    let field: string;

    if (name.includes("address")) {
      console.log("address field changed");
      field = name.split(".");
      console.log(field[1]);

      setStoreData((prevState) => {
        const newAddress: any = { ...prevState.address };
        console.log(newAddress);
        newAddress[field[1]] = value;
        return {
          ...prevState,
          address: newAddress,
        };
      });
    } else if (name.includes("location")) {
      console.log("location field changed");
      field = name.split(".");
      console.log(field[1]);

      setStoreData((prevState) => {
        const newLocation: any = { ...prevState.location };
        console.log(newLocation);
        newLocation[field[1]] = value;
        return {
          ...prevState,
          location: newLocation,
        };
      });
    } else {
      setStoreData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  async function onCreate() {
    console.log(storeData);
    const res = await addStore(storeData);
    setFormSuccessMessage(res.message);
  }

  return (
    <form action={onCreate}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Store Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Update information relating to this store.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Store name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="address.addr1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address.addr1"
                  id="address.addr1"
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="address.town"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Town
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address.town"
                  id="address.town"
                  onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address.county"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                County
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address.county"
                  id="address.county"
                  onChange={handleChange}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address.postcode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Postcode
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address.postcode"
                  id="address.postcode"
                  onChange={handleChange}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label
                htmlFor="location.latitude"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Latitude
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="0.0000001"
                  name="location.latitude"
                  id="location.latitude"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="location.longitude"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Longitude
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="0.0000001"
                  name="location.longitude"
                  id="location.longitude"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
