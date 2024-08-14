import { FormCheckbox } from "@/components/form-elements";
import { Input } from "@/components/ui/input";
import { TLesson } from "@/lib/types";
import { useEffect, useState } from "react";
import Heading from "@/components/heading";

export default function Lessons({ control }: { control: any }) {
  const [search, setSearch] = useState<string>("");

  const [items, setItems] = useState<TLesson[]>([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await fetch(`/api/lesson?search=${search}`);
      const data = await response.json();
      setItems(data);
    };

    fetchLessons();
  }, [search]);

  return (
    <div className="flex flex-col md:px-32  md:py-16 md:flex-row gap-4 md:m-6 w-full">
      <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
        <Heading title="Bilgi" classNameTitle=" text-5xl mb-6"></Heading>
        <div>
          <br />
          <p>Lütfen vermek istediğiniz dersleri seçin.</p>
          <br />
          <p>
            Bu bilgiyle sizin verebileceginiz derslere olan talepleri size
            göstereceğiz.
          </p>
          <br />
          <p>
            Ayrıca verdiğiniz derslerden birini veya bir kaçını talep eden
            öğrenciler de size ulaşabilecek ve doğrudan iletişim kurabilecektir.
          </p>
        </div>
      </div>

      <div className="flex flex-col p-12 w-full rounded-xl shadow-md md:order-2 order-1 ">
        <Input
          type="text"
          placeholder="Vermek istediginiz dersi girin"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <FormCheckbox
          control={control}
          placeholder="Vermek istediginiz dersleri secin"
          name="lessons"
          items={items}
          className="border-none"
        />
      </div>
    </div>
  );
}
