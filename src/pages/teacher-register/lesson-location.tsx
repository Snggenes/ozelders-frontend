import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Heading from "@/components/heading";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import LeftSide from "./left-side";

export default function LessonLocation({ form }: { form: any }) {
  const city = form.watch("city");
  const lessonDistricts = form.watch("lessonDistricts");
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    async function fetchDistricts() {
      if (!city) {
        toast.error("Please select a city first");
        return;
      }

      const response = await fetch(`/api/location/district?city=${city}`);
      if (!response.ok) {
        throw new Error("Location service unavailable");
      }
      const data = await response.json();
      setDistricts(data);
    }

    fetchDistricts();
  }, [city]);


  const childNode =      <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
  <Heading title="Bilgi" classNameTitle=" text-5xl mb-6"></Heading>
  <div>
    <br />
    <p>
      Lütfen ders verebileceginiz ilçeleri seçin. İstediğiniz kadar seçim
      yapabilirsiniz.
    </p>
    <br />
    <p>
      Bu bilgiyle sizin ders verebileceğiniz ilçelerdeki öğrencilerle
      iletişim kurabileceksiniz.
    </p>
    <br />
    <p>
      Hem siz seçtiğiniz ilçelerdeki öğrencilere gösterileceksiniz, hem de
      ders taleplerini görürken bu ilçelerdeki kişilere ulaşmış
      olacaksınız.
    </p>
  </div>
</div>

  return (
    <div className="flex flex-col md:px-32  md:py-16 md:flex-row gap-4 md:m-6 w-full">
      <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
        <Heading title="Bilgi" classNameTitle=" text-5xl mb-6"></Heading>
        <div>
          <br />
          <p>
            Lütfen ders verebileceginiz ilçeleri seçin. İstediğiniz kadar seçim
            yapabilirsiniz.
          </p>
          <br />
          <p>
            Bu bilgiyle sizin ders verebileceğiniz ilçelerdeki öğrencilerle
            iletişim kurabileceksiniz.
          </p>
          <br />
          <p>
            Hem siz seçtiğiniz ilçelerdeki öğrencilere gösterileceksiniz, hem de
            ders taleplerini görürken bu ilçelerdeki kişilere ulaşmış
            olacaksınız.
          </p>
        </div>
      </div>

      <LeftSide children={childNode}/>
    </div>
  );
}
