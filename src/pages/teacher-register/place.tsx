import { FormCheckbox } from "@/components/form-elements";
import { useState, useEffect } from "react";
import { TLessonPlace } from "@/lib/types";
import Heading from "@/components/heading";

export default function Place({ control }: { control: any }) {
  const [lessonPlaces, setLessonPlaces] = useState<TLessonPlace[]>([]);

  useEffect(() => {
    const fetchLessonPlaces = async () => {
      const response = await fetch(`/api/lesson-place`);
      const data = await response.json();
      setLessonPlaces(data);
    };

    fetchLessonPlaces();
  }, []);

  return (
    <div className="flex flex-col md:px-32  md:py-16 md:flex-row gap-4 md:m-6 w-full">
      <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
        <Heading
          title="Bilgi"
          classNameTitle=" text-5xl mb-6"
        ></Heading>
        <div>
          <br />
          <p>
          Derslerinizi belirttiğiniz adresteki evinizde verebilirsiniz.
          </p>
<br />
<p>
  Birden fazla seçenek belirleyebilirsiniz. Böylece daha fazla öğrenciye ulaşırsınız.
</p>
<br />
          <p>
          Öğrencinin evine veya kararlaştıracağınız başka bir mekana gitmek için gidebileceğiniz en fazla uzaklık
          </p>
          <br />
          <p>🗓️ Sınırları ortadan kaldırın, webcam üzerinden derslerinizi online olarak tüm dünyadaki öğrencilere verin</p>
        </div>
      </div>

      <div className="flex flex-col p-12 w-full rounded-xl shadow-md md:order-2 order-1 ">
        <Heading title="Ders Vermek İstediğiniz Yerleri Seçin"></Heading>
        <FormCheckbox
        className="border-none"
          control={control}
          placeholder="Vermek istediginiz dersleri secin"
          name="lessonPlaces"
          items={lessonPlaces}
        />
      </div>
    </div>
  );
}
