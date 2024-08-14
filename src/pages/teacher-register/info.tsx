import { FormInput } from "@/components/form-elements";
import Heading from "@/components/heading";
import { FormCalendar } from "@/components/form-elements";

export default function Info({ control }: { control: any }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:m-6 w-full">
      <div className=" md:w-full flex flex-col md:order-1 order-2 p-6  ">
      <Heading title="Özel ders verin,
bilgi ve deneyimlerinizi paylaşın" classNameTitle=" text-5xl mb-6" classNameSubtitle="underline text-black text-xl font-bold" subtitle="Türkiye'nin 1 Numaralı Online Özel Ders Sitesinde Evde Özel Ders Öğretmeni Olun"></Heading>
<div>
  <br />
<p>"Online özel ders işleri" arayışınız ozelderszamani.com ile son buluyor!</p> 

<p> İster evden iş arıyor olun, ister tam zamanlı kazanmak istiyor olun, ozelderszamani.com'da özel ders öğretmeni olabilirsiniz. Çabalarımız, herkesin bilgi paylaşması ve kazanması için bir öğretim platformu sağlamaya yöneliktir.</p>
<br />
<p>🗓️ Evde Online Özel Ders Planı - Kendi Patronunuz Olun </p>
<br />
<p>💻 Yüzlerce Konu İçin Online Özel Ders İşi Bulun</p>
<br />
<p>💸 Ders ücretlerinizi kendiniz belirleryin.</p>
<br />
<p> ozelderszamani.com ağımızda yüzlerce konuda (diller, spor, müzik, sanat, hobiler ve akademisyenler) evde veya çevrimiçi olarak öğretmenlik yapın. </p>
<br />
<p className=" font-bold text-l underline"> ozelderszamani.com Girişini kullanarak kaydolun - Komisyon alınmaz - Kayıt Ücreti Yok</p>
</div>
      </div>
      <div className="flex md:w-full rounded-xl shadow-md md:order-2 order-1 md:p-16 p-3 flex-col gap-4 pt-4 lg:pt-8">
        <Heading
          title="Öğretmen Kaydı"
          subtitle="Öğretmenlik yapmak için lütfen bilgilerinizi doldurunuz."
        />
        <div className="w-full flex flex-col lg:flex-row lg:gap-4">
          <div className="w-full">
            <FormInput
              type="text"
              control={control}
              placeholder="Ad"
              name="firstname"
              label="Ad"
              className="w-full"
            />
          </div>
          <div className="w-full">
            <FormInput
              type="text"
              control={control}
              placeholder="Soyad"
              name="lastname"
              label="Soyad"
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:gap-4">
          <div className="w-full">
            <FormInput
              type="tel"
              control={control}
              placeholder="0555 555 55 55"
              name="phone"
              label="Telefon"
              pattern="[0]{1}[5]{1}[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
            />
          </div>
          <div className="w-full">
            <FormInput
              type="password"
              control={control}
              placeholder="********"
              name="password"
              label="Şifre"
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:gap-4 items-center">
          <div className="w-full">
            <FormInput
              type="email"
              control={control}
              placeholder="Email"
              name="email"
              label="Email"
            />
          </div>
          <div className="w-full mt-2">
            <FormCalendar
              control={control}
              name="dateOfBirth"
              label="Doğum Tarihi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
