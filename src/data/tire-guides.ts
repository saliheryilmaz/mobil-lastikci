export interface TireGuide {
  slug: string;
  title: string;
  shortDescription: string;
  readTime: string;
  category: 'temel' | 'bakim' | 'satin-alma';
  categoryLabel: string;
  content: TireGuideSection[];
}

export interface TireGuideSection {
  heading: string;
  body: string;
}

export const tireGuides: TireGuide[] = [
  {
    slug: 'lastik-ebat-okuma',
    title: 'Lastik Ebat Okuma Rehberi',
    shortDescription: '205/55R16 gibi lastik kodlarının ne anlama geldiğini öğrenin. Genişlik, yanak oranı, jant çapı ve yük endeksini kolayca anlayın.',
    readTime: '5 dk',
    category: 'temel',
    categoryLabel: 'Temel Bilgiler',
    content: [
      {
        heading: 'Lastik Ebadı Nedir?',
        body: 'Lastik ebadı, lastiğin boyutlarını ve özelliklerini gösteren standart bir kodlama sistemidir. Her lastiğin yan tarafında (yanak) bu bilgi yazılıdır. Örneğin 205/55R16 91V gibi bir kod, lastiğin genişliğini, profil oranını, yapı tipini, jant çapını, yük endeksini ve hız sınıfını ifade eder. Doğru ebat seçimi, aracınızın performansı, güvenliği ve yakıt tüketimi açısından kritik öneme sahiptir.',
      },
      {
        heading: 'Genişlik (205)',
        body: 'İlk sayı, lastiğin milimetre cinsinden enini gösterir. 205 yazıyorsa lastiğinizin genişliği 205 mm\'dir. Daha geniş lastikler daha fazla yol tutuş sağlarken, dar lastikler yakıt tasarrufu sunar. Aracınızın üretici firması tarafından önerilen genişlik değerini kullanmanız önerilir.',
      },
      {
        heading: 'Yanak Oranı (55)',
        body: 'İkinci sayı, lastiğin yanak yüksekliğinin genişliğe oranını yüzde olarak ifade eder. 55, lastiğin yüksekliğinin genişliğinin %55\'i kadar olduğu anlamına gelir. Düşük profilli lastikler (40-45) sportif görünüm ve keskin direksiyon tepkisi sunarken, yüksek profilli lastikler (60-70) daha konforlu bir sürüş sağlar.',
      },
      {
        heading: 'Yapı Tipi (R) ve Jant Çapı (16)',
        body: 'R harfi, lastiğin radyal yapıda olduğunu belirtir. Günümüzde üretilen lastiklerin büyük çoğunluğu radyal yapıdadır. Sonrasındaki 16 sayısı ise jant çapını inç cinsinden gösterir. Lastiğinizin jant çapı, aracınızdaki jantlarla eşleşmelidir.',
      },
      {
        heading: 'Yük Endeksi ve Hız Sınıfı (91V)',
        body: 'Ebat kodunun sonundaki sayı yük endeksini, harf ise hız sınıfını gösterir. 91 yük endeksi, lastiğin maksimum 615 kg taşıyabileceğini belirtir. V hız sınıfı ise lastiğin 240 km/s hıza kadar dayanıklı olduğu anlamına gelir. Aracınızın ağırlığına ve kullanım şeklinize uygun değerleri seçmek önemlidir.',
      },
    ],
  },
  {
    slug: 'yazlik-kislik-lastik-farklari',
    title: 'Yazlık ve Kışlık Lastik Farkları',
    shortDescription: 'Mevsimlik lastik değişiminin neden önemli olduğunu, yazlık ve kışlık lastiklerin fren mesafesi ve yol tutuş farklarını keşfedin.',
    readTime: '6 dk',
    category: 'temel',
    categoryLabel: 'Temel Bilgiler',
    content: [
      {
        heading: 'Neden Mevsimlik Lastik Kullanmalıyız?',
        body: 'Yazlık ve kışlık lastikler farklı sıcaklık aralıklarında en iyi performansı gösterecek şekilde tasarlanmıştır. Yazlık lastiklerin hamuru 7°C\'nin altında sertleşerek yol tutuşunu kaybeder; kışlık lastikler ise sıcak havalarda aşırı yumuşayarak hızla aşınır. Doğru mevsimde doğru lastik kullanmak hem güvenliğinizi hem de cüzdanınızı korur.',
      },
      {
        heading: 'Yazlık Lastiklerin Özellikleri',
        body: 'Yazlık lastikler, 7°C ve üzeri sıcaklıklarda optimum performans gösterir. Sert hamur bileşiği sayesinde sıcak asfaltta mükemmel yol tutuş ve kısa fren mesafesi sunar. Daha az sırt kanalı olması, kuru zeminde geniş temas yüzeyi sağlar. Yağmurlu havalarda aquaplaning riskini azaltan özel kanal tasarımları bulunur.',
      },
      {
        heading: 'Kışlık Lastiklerin Özellikleri',
        body: 'Kışlık lastikler, 7°C\'nin altındaki sıcaklıklarda bile esnek kalan özel silika bazlı hamur bileşiğine sahiptir. Sırt deseni üzerindeki binlerce küçük lamel (sipe), kar ve buzda tutunmayı artırır. Daha derin sırt kanalları, kar ve çamur tahliyesini kolaylaştırır. Islak ve buzlu yollarda fren mesafesini %30-50 oranında kısaltabilir.',
      },
      {
        heading: 'Ne Zaman Değiştirilmeli?',
        body: 'Genel kural: Gece sıcaklıkları düzenli olarak 7°C\'nin altına düştüğünde kışlık lastiklere geçin; bahar aylarında gece sıcaklıkları sürekli 7°C\'nin üzerine çıktığında yazlık lastiklere dönün. Türkiye\'de genellikle Kasım ortası - Mart sonu arası kışlık lastik sezonu olarak kabul edilir. 1 Aralık - 1 Nisan arası zorunlu kışlık lastik/zincir uygulaması unutulmamalıdır.',
      },
      {
        heading: '4 Mevsim Lastik Alternatifi',
        body: '4 mevsim (all-season) lastikler, yazlık ve kışlık arasında bir denge sunar. Ilıman iklimlerde ve düşük kilometreli kullanıcılar için pratik bir çözüm olabilir. Ancak ne yazın ne de kışın, özel mevsimlik lastikler kadar iyi performans gösteremezler. Yoğun kış koşulları veya sportif sürüş yapanlar için mevsimlik lastikler tercih edilmelidir.',
      },
    ],
  },
  {
    slug: 'lastik-hava-basinci',
    title: 'Lastik Hava Basıncı Rehberi',
    shortDescription: 'Doğru lastik basıncının yakıt tasarrufu, güvenlik ve lastik ömrü üzerindeki etkisini öğrenin.',
    readTime: '4 dk',
    category: 'bakim',
    categoryLabel: 'Bakım & Güvenlik',
    content: [
      {
        heading: 'Doğru Basınç Neden Önemli?',
        body: 'Lastik hava basıncı, sürüş güvenliğinin en temel unsurlarından biridir. Yanlış basınçla sürüş yapmak fren mesafesini uzatır, direksiyon kontrolünü zorlaştırır ve lastik patlaması riskini artırır. Ayrıca düşük basınç yakıt tüketimini %3-5 oranında artırabilir ve lastiğin ömrünü %25 kadar kısaltabilir.',
      },
      {
        heading: 'Doğru Basıncı Nereden Öğrenebilirim?',
        body: 'Aracınız için önerilen lastik basıncı, sürücü kapısının iç kenarındaki etikette, yakıt deposu kapağının iç yüzeyinde veya araç kullanım kılavuzunda yazmaktadır. Genellikle 2.0-2.5 bar (30-36 PSI) arasında bir değerdir. Ön ve arka lastikler için farklı basınç değerleri önerilmiş olabilir.',
      },
      {
        heading: 'Basınç Kontrolü Ne Sıklıkla Yapılmalı?',
        body: 'Lastik basıncını ayda en az bir kez ve uzun yolculuklardan önce mutlaka kontrol etmelisiniz. Lastikler doğal olarak her ay yaklaşık 0.07 bar (1 PSI) basınç kaybeder. Sıcaklık değişimleri de basıncı etkiler: Her 6°C\'lik sıcaklık düşüşünde basınç yaklaşık 0.07 bar (1 PSI) azalır.',
      },
      {
        heading: 'Düşük ve Yüksek Basıncın Zararları',
        body: 'Düşük basınç: Lastiğin kenarları aşırı aşınır, yakıt tüketimi artar, direksiyon ağırlaşır, lastik ısınarak patlama riski oluşur. Yüksek basınç: Lastiğin ortası aşırı aşınır, yol tutuş azalır, sürüş konforu düşer, çukur ve kasis darbelerine karşı hasar riski artar. Her iki durum da güvenliğinizi tehdit eder.',
      },
    ],
  },
  {
    slug: 'lastik-dis-derinligi',
    title: 'Lastik Diş Derinliği Kontrolü',
    shortDescription: 'Güvenli sürüş için minimum diş derinliği değerlerini ve evde kolayca yapabileceğiniz kontrol yöntemlerini öğrenin.',
    readTime: '4 dk',
    category: 'bakim',
    categoryLabel: 'Bakım & Güvenlik',
    content: [
      {
        heading: 'Diş Derinliği Nedir?',
        body: 'Lastik diş derinliği, lastiğin sırt yüzeyindeki kanalların (olukların) derinliğini ifade eder. Yeni bir lastiğin diş derinliği genellikle 7-8 mm arasındadır. Bu kanallar, yağmur suyunu lastiğin altından tahliye ederek aquaplaning (su kayması) riskini azaltır ve yola tutunmayı sağlar.',
      },
      {
        heading: 'Yasal Minimum Değer',
        body: 'Türkiye\'de yasal minimum lastik diş derinliği 1.6 mm\'dir. Ancak güvenlik uzmanları, yazlık lastiklerde 3 mm, kışlık lastiklerde ise 4 mm\'nin altına düşülmemesini önerir. 1.6 mm diş derinliğinde ıslak zeminde fren mesafesi, yeni bir lastiğe göre yaklaşık 2 kat uzar.',
      },
      {
        heading: 'Evde Nasıl Kontrol Edilir?',
        body: 'Bozuk para testi: 1 TL\'lik bir madeni parayı lastiğin oluğuna yerleştirin. Eğer madeni paranın kenarındaki yazı tamamen görünüyorsa lastiğinizin diş derinliği yetersiz demektir. Ayrıca birçok lastik üzerinde TWI (Tread Wear Indicator) adı verilen aşınma göstergeleri bulunur. Lastik yüzeyi bu göstergelerle aynı seviyeye geldiğinde lastik değişim zamanı gelmiş demektir.',
      },
      {
        heading: 'Düzensiz Aşınma Belirtileri',
        body: 'Lastiğinizin iç veya dış kenarı diğer tarafından daha fazla aşınmışsa, bu balans ayarı veya rot ayarı bozukluğuna işaret eder. Orta kısım aşınmışsa basınç fazladır; kenarlar aşınmışsa basınç düşüktür. Lekeli veya yamuk aşınma ise süspansiyon sorununa işaret edebilir. Bu durumları fark ettiğinizde servisinize danışın.',
      },
    ],
  },
  {
    slug: 'lastik-omrunu-uzatma',
    title: 'Lastik Ömrünü Uzatma İpuçları',
    shortDescription: 'Basit bakım alışkanlıklarıyla lastiklerinizin ömrünü 2 kata kadar uzatabilir, güvenli sürüş ve tasarruf sağlayabilirsiniz.',
    readTime: '5 dk',
    category: 'bakim',
    categoryLabel: 'Bakım & Güvenlik',
    content: [
      {
        heading: 'Düzenli Basınç Kontrolü',
        body: 'Lastiğin en büyük düşmanı yanlış basınçtır. Ayda en az bir kez, ideali iki haftada bir, lastik basınçlarını kontrol edin. Basınç ölçümünü lastikler soğukken (en az 3 saat araç kullanmadan) yapmalısınız. Doğru basınç tek başına lastik ömrünü %25\'e kadar uzatabilir.',
      },
      {
        heading: 'Düzenli Rot-Balans Ayarı',
        body: 'Her 10.000-15.000 km\'de bir rot ve balans ayarı yaptırın. Yanlış rot ayarı, lastiğin bir tarafının diğerinden çok daha hızlı aşınmasına neden olur. Balans bozukluğu ise titreşime yol açarak hem lastiği hem de süspansiyonu yıpratır. Özellikle çukurlu yollarda sık sürüyorsanız bu kontrolleri daha sık yaptırın.',
      },
      {
        heading: 'Lastik Rotasyonu',
        body: 'Her 8.000-10.000 km\'de bir lastik rotasyonu (yer değiştirme) yapın. Ön ve arka lastikler farklı hızlarda aşınır çünkü ön lastikler direksiyon ve frenleme yükünü daha fazla taşır. Rotasyon ile tüm lastiklerin eşit aşınmasını sağlayabilir ve takım ömrünü önemli ölçüde uzatabilirsiniz.',
      },
      {
        heading: 'Sürüş Alışkanlıkları',
        body: 'Ani fren yapmaktan, hızlı kalkışlardan ve virajlara hızlı girmekten kaçının. Agresif sürüş lastik aşınmasını 2-3 kat hızlandırabilir. Kasis ve çukurlardan yavaş geçin, kaldırıma bindirmekten kaçının. Sakin ve öngörülü bir sürüş tarzı hem lastik ömrünü hem de yakıt ekonomisini olumlu etkiler.',
      },
      {
        heading: 'Doğru Saklama Koşulları',
        body: 'Kullanmadığınız lastikleri (yazlık/kışlık) serin, kuru ve güneş almayan bir yerde saklayın. UV ışınları lastik hamurunu kurutur ve çatlatır. Lastikleri dik pozisyonda, mümkünse lastik torbalarında saklayın. Yanlarında kimyasal madde, yağ veya çözücü bulundurmayın. Doğru saklama, lastiklerin mevsim dışındaki bozulmasını önler.',
      },
    ],
  },
  {
    slug: 'run-flat-lastik-nedir',
    title: 'Run-Flat Lastik Nedir?',
    shortDescription: 'Patladığında bile sürüşe devam edebilen run-flat lastiklerin avantajları, dezavantajları ve hangi araçlarda kullanıldığını öğrenin.',
    readTime: '4 dk',
    category: 'satin-alma',
    categoryLabel: 'Satın Alma',
    content: [
      {
        heading: 'Run-Flat Teknolojisi',
        body: 'Run-flat lastikler, havasız kaldıklarında bile belirli bir mesafe ve hızda sürüşe devam etmenizi sağlayan özel lastiklerdir. Güçlendirilmiş yanak yapısı sayesinde, basınç tamamen sıfırlansa bile lastiğin şekli korunur ve janttan çıkmaz. Genellikle 80 km/s hız ile 80 km mesafeye kadar sürüşe devam edilebilir.',
      },
      {
        heading: 'Avantajları',
        body: 'En büyük avantajı, patlak lastik durumunda güvenli bir şekilde en yakın servise veya güvenli bir noktaya ulaşabilmenizdir. Bagajda stepne taşıma zorunluluğu ortadan kalkar, bu da yakıt tasarrufu sağlar ve bagaj alanı kazandırır. Patlama anında direksiyon kontrolünün aniden kaybedilmesi riskini azaltır.',
      },
      {
        heading: 'Dezavantajları',
        body: 'Normal lastiklere göre %20-30 daha pahalıdır. Sert yanak yapısı nedeniyle sürüş konforu biraz düşüktür; özellikle bozuk yollarda titreşim hissedilebilir. Tamir edilebilirliği sınırlıdır: çoğu durumda yanak hasar gördüğünde tamir yapılamaz. Ayrıca TPMS (lastik basınç izleme sistemi) olmayan araçlarda kullanılmamalıdır çünkü patlağı fark edemeyebilirsiniz.',
      },
      {
        heading: 'Hangi Araçlarda Kullanılır?',
        body: 'BMW, Mercedes-Benz ve MINI başta olmak üzere birçok premium marka, araçlarını fabrika çıkışında run-flat lastiklerle donatır. Bu araçlarda stepne bölmesi bulunmaz. Run-flat lastik kullanmak için aracınızın jantlarının ve süspansiyonunun uyumlu olması gerekir. Standart jantlara run-flat takılması önerilmez.',
      },
    ],
  },
];

export const guideCategories = [
  { key: 'temel' as const, label: 'Temel Bilgiler' },
  { key: 'bakim' as const, label: 'Bakım & Güvenlik' },
  { key: 'satin-alma' as const, label: 'Satın Alma' },
];
