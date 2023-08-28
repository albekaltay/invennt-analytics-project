import { RadioGroup } from "@headlessui/react";

export default function CategoryRadioGroup({
  movieType,
  setMovieType,
  categories,
}) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={movieType} onChange={setMovieType}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="flex flex-row space-x-3">
            {categories.map((category) => (
              <RadioGroup.Option
                key={category.name}
                value={category.value}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-700"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-slate-700 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-4 py-2 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {category.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
