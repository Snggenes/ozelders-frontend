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

  console.log("lessonDistricts", lessonDistricts);

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

      <div className="flex flex-col p-12 w-full rounded-xl shadow-md md:order-2 order-1 ">
        <Heading
          title="Ders yerleri"
          subtitle="Lutfen ders verebileceginiz yerleri secin"
        />
        {lessonDistricts && lessonDistricts.length > 0 && (
          <div className="flex flex-row items-center space-x-3">
            <Heading
              title="Secilen ilceler"
              subtitle={lessonDistricts.join(", ")}
            />
          </div>
        )}
        <div className="">
          <FormField
            control={form.control}
            name="lessonDistricts"
            render={() => (
              <FormItem className="grid grid-cols-2 lg:grid-cols-3 gap-x-4">
                {districts.map((item: any) => (
                  <div key={item} className="p-1 mt-2">
                    <FormField
                      key={item}
                      control={form.control}
                      name="lessonDistricts"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="w-5 h-5"
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: any) => value !== item
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                ))}

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
