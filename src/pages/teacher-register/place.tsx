import { FormCheckbox } from "@/components/form-elements";
import { useState, useEffect } from "react";
import { TLessonPlace } from "@/lib/types";
import Heading from "@/components/heading";
import LeftSide from "./left-side";

export default function Place({ form }: { form: any }) {
  const [lessonPlaces, setLessonPlaces] = useState<TLessonPlace[]>([]);

  useEffect(() => {
    const fetchLessonPlaces = async () => {
      const response = await fetch(`/api/lesson-place`);
      const data = await response.json();
      setLessonPlaces(data);
    };

    fetchLessonPlaces();
  }, []);

  const selectedLessonPlaces = form.watch("lessonPlaces");

  const childNode =      <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
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
    <div className="flex flex-col md:flex-row gap-4 md:m-6 w-full">
      <LeftSide children={childNode}/>
      <div className="flex md:w-full rounded-xl shadow-md md:order-2 order-1 md:p-16 p-3 flex-col gap-4 pt-4 lg:pt-8">
      <FormCheckbox
        control={form.control}
        placeholder="Vermek istediginiz dersleri secin"
        name="lessonPlaces"
        items={lessonPlaces}
      />
      </div>
      
    </div>
  );
}
