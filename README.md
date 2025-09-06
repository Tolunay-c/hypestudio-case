# Place & Trade Area Data Visualization

Bu proje, mekanların ve ticaret alanlarının coğrafi verilerini görselleştirmek için geliştirilmiş bir React uygulamasıdır.

## 🚀 Özellikler

### Sol Sidebar (Filtreler & Kontroller)
- **Place Analysis**: Radius ve sub-category filtreleri ile yakındaki mekanları görüntüleme
- **Customer Analysis**: Trade Area ve Home Zipcodes veri tiplerini seçme
- **Trade Area Options**: %30, %50, %70 yüzdelik değerlerini seçme

### Harita Görselleştirmesi
- **Deck.gl + Mapbox** entegrasyonu
- Mekan pinleri (My Place özel işaretli)
- Trade Area polygonları (çoklu gösterim)
- Home Zipcodes görselleştirmesi
- Hover ve click tooltip'leri

### Sağ Sidebar (Legend)
- Trade Area renk kodları
- Home Zipcodes yüzdelik aralıkları
- Harita kontrol butonları

## 🛠️ Teknolojiler

- **React** (Functional Components & Hooks)
- **Material UI** (UI/UX bileşenleri)
- **Deck.gl + Mapbox + react-map-gl** (harita ve coğrafi veri görselleştirme)
- **TypeScript** (tip güvenliği)
- **Vite** (build tool)

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd hypestudio-case
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:5173` adresini açın.

## 🔧 Yapılandırma

### Mapbox Token
`src/components/Map.tsx` dosyasında Mapbox token'ınızı güncelleyin:

```typescript
const MAPBOX_TOKEN = 'your-mapbox-token-here';
```

### Veri Entegrasyonu
Şu anda mock data kullanılmaktadır. Gerçek veriler için:

1. Supabase veya başka bir veritabanı kurulumu yapın
2. `src/data/mockData.ts` dosyasını gerçek API çağrıları ile değiştirin
3. `src/context/AppContext.tsx` dosyasında veri yükleme mantığını güncelleyin

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── LeftSidebar.tsx      # Sol sidebar (filtreler)
│   ├── RightSidebar.tsx     # Sağ sidebar (legend)
│   ├── Map.tsx             # Ana harita bileşeni
│   └── MapControls.tsx     # Harita kontrol butonları
├── context/
│   └── AppContext.tsx      # React context ve state management
├── data/
│   └── mockData.ts         # Mock veriler
├── types/
│   └── index.ts            # TypeScript tip tanımları
└── App.jsx                 # Ana uygulama bileşeni
```

## 🎯 Kullanım

1. **Place Seçimi**: Haritada bir mekan seçin
2. **Filtreleme**: Sol sidebar'dan radius ve sub-category filtrelerini ayarlayın
3. **Veri Tipi Seçimi**: Customer Analysis bölümünden Trade Area veya Home Zipcodes seçin
4. **Görselleştirme**: Harita üzerinde seçilen verileri görüntüleyin
5. **Legend**: Sağ sidebar'dan renk kodlarını ve kontrol butonlarını kullanın

## 🔄 Veri Akışı

1. **Place Data**: Uygulama başlangıcında yüklenir
2. **Trade Area Data**: On-demand olarak yüklenir (Show Trade Area butonuna tıklandığında)
3. **Home Zipcodes Data**: On-demand olarak yüklenir (Show Home Zipcodes butonuna tıklandığında)

## 🎨 UI Davranışları

- **Disabled Buttons**: Veri mevcut değilse butonlar disabled olur ve tooltip gösterir
- **Tooltip'ler**: Hover ve click durumlarında mekan bilgileri gösterilir
- **Renk Uyumu**: Legend ve harita üzerindeki renkler uyumludur
- **Çoklu Gösterim**: Trade Area'lar çoklu gösterimi destekler

## 🚀 Production Build

```bash
npm run build
```

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
