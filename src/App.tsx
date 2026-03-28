import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBag, Building, Home, MapPin, Phone, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from './assets/logo.jpg';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Gatto Felice", href: "#ec-business" },
    { name: "Real Estate", href: "#real-estate" },
    { name: "Company", href: "#company" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 md:gap-4 z-50 group">
            <img 
              src={logoImg} 
              alt="HIMEMILANO Logo" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-contain bg-white shadow-sm border border-gray-100 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wider text-ink">
              HIMEMILANO
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* Hero Section with Space & Earth Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
        {/* Space Background (Stars) */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #dddddd, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 160px 120px, #dddddd, rgba(0,0,0,0))', 
            backgroundSize: '200px 200px',
            opacity: 0.8
          }}
        ></div>
        
        {/* Realistic 3D Rotating Earth */}
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-90">
          <style>{`
            @keyframes spin-earth {
              from { background-position: 0% center; }
              to { background-position: 200% center; }
            }
          `}</style>
          <div className="relative w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full shadow-[0_0_80px_rgba(70,130,180,0.3)]">
            {/* Tilted & Spinning Earth Texture */}
            <div 
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{ transform: 'rotate(23.5deg)' }}
            >
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: "url('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')",
                  backgroundSize: "200% 100%",
                  backgroundRepeat: "repeat-x",
                  animation: "spin-earth 80s linear infinite"
                }}
              />
            </div>
            {/* Fixed Day/Night Shadow Overlay */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: "inset -60px -40px 100px rgba(0,0,0,0.9), inset 10px 10px 40px rgba(255,255,255,0.2)"
              }}
            />
          </div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base font-semibold tracking-[0.2em] text-blue-200 uppercase mb-4 block drop-shadow-md"
          >
            Global Trading & Real Estate Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 text-white drop-shadow-lg"
          >
            HIMEMILANO <br className="hidden md:block" />
            <span className="italic font-light text-gray-300">WORLD TRADING</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-300 md:text-lg max-w-2xl mx-auto drop-shadow-md"
          >
            洗練されたライフスタイルと確かな住環境を、世界へ、そしてあなたへ。
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 bg-gradient-to-b from-gray-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-5xl mb-4">About Our Business</h2>
            <p className="text-gray-500 tracking-wide">多角的なアプローチで、お客様の多様なニーズに応える事業展開</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-paper p-10 rounded-3xl"
            >
              <div className="w-14 h-14 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4">EC事業 <br/><span className="italic text-brand">GATTO FELICE</span></h3>
              <p className="text-gray-600 leading-relaxed">
                インポートハイブランドから、日本発の精巧な製品まで。独自のネットワークと販売戦略でグローバルに展開するオンラインショップを運営しています。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="bg-paper p-10 rounded-3xl"
            >
              <div className="w-14 h-14 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
                <Building size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4">不動産・建築事業</h3>
              <p className="text-gray-600 leading-relaxed">
                確かな目利きとプロフェッショナルな知見で、不動産コンサルティングからリフォーム、インスペクションまで、住まいと資産の価値を最大化します。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EC Business Section */}
      <section id="ec-business" className="py-24 md:py-32 bg-ink text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-5xl mb-4">Gatto Felice Worldwide</h2>
            <p className="text-gray-400 tracking-wide">世界中のお客様へ、至高のアイテムをお届けするグローバルECネットワーク</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { name: "Buyma (Japan)", desc: "インポートハイブランド 国内向け", url: "https://www.buyma.com/buyer/11038858.html" },
              { name: "Shopee Malaysia", desc: "マレーシア向け 日本製品販売", url: "https://shopee.com.my/gatto_felice.my" },
              { name: "Shopee Thailand", desc: "タイ向け 日本製品販売", url: "https://shopee.co.th/gatto_felice.th" },
              { name: "Shopee Philippines", desc: "フィリピン向け 日本製品販売", url: "https://shopee.ph/gatto_felice.ph" },
              { name: "Shopee Taiwan", desc: "台湾向け 日本製品販売", url: "https://shopee.tw/gatto_felice.tw" },
              { name: "Shopee Singapore", desc: "シンガポール向け 日本製品販売", url: "https://shopee.sg/gatto_felice.sg" },
              { name: "Shopee Vietnam", desc: "ベトナム向け 日本製品販売", url: "https://shopee.vn/gatto_felice.vn" },
              { name: "Shopee Brazil", desc: "ブラジル向け 日本製品販売", url: "https://shopee.com.br/gatto_felice.br" },
              { name: "BASE (m&m design)", desc: "monomyデザインアクセサリー", url: "https://gattofelice.base.shop", highlight: true },
            ].map((shop, i) => (
              <motion.a
                key={shop.name}
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  shop.highlight 
                    ? "border-brand bg-brand/10 hover:bg-brand/20" 
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-serif text-xl font-medium">{shop.name}</h4>
                  <ChevronRight size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm text-gray-400">{shop.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section id="real-estate" className="py-24 md:py-32 bg-paper">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">Real Estate & Construction</h2>
              <p className="text-gray-500 tracking-wide">住まいの価値を高め、安心と快適を創造する</p>
            </div>

            <div className="space-y-12">
              {[
                { title: "不動産コンサルティング", desc: "資産価値の最大化と最適な運用をご提案。お客様一人ひとりの状況に合わせた、戦略的な不動産アプローチを提供します。" },
                { title: "リフォーム", desc: "ライフスタイルの変化に合わせた、美しく機能的な空間へのリノベーション。細部にまでこだわった上質な仕上がりをお約束します。" },
                { title: "外構工事", desc: "建物の顔となるエクステリアを、デザイン性と機能性を兼ね備えた空間へと昇華。周囲の環境と調和する美しい外構を設計・施工します。" },
                { title: "ホームインスペクション", desc: "プロフェッショナルな視点での住宅診断。隠れた瑕疵や劣化状況を的確に把握し、安心・安全な不動産取引と住環境維持をサポートします。" },
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 md:gap-10"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-2xl md:text-3xl text-brand font-light italic">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-[1px] h-full bg-gray-200 mt-4"></div>
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl md:text-2xl font-medium mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-4">Company Profile</h2>
            <p className="text-gray-500 tracking-wide">会社概要</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-paper rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-b border-gray-200 pb-6">
                <div className="text-gray-500 font-medium">会社名</div>
                <div className="md:col-span-2 font-medium">HIMEMILANO WORLD TRADING <br className="hidden md:block"/><span className="text-sm text-gray-500 font-normal">(ヒメミラノ ワールド トレーディング)</span></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-b border-gray-200 pb-6">
                <div className="text-gray-500 font-medium">代表者</div>
                <div className="md:col-span-2">松井 浩愛 (Matsui Hiroyoshi)</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-b border-gray-200 pb-6">
                <div className="text-gray-500 font-medium">事業内容</div>
                <div className="md:col-span-2 leading-loose">
                  EC店舗「GATTO FELICE」の運営<br/>
                  不動産コンサルティング<br/>
                  リフォーム・外構工事<br/>
                  ホームインスペクション
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-b border-gray-200 pb-6">
                <div className="text-gray-500 font-medium flex items-center gap-2"><MapPin size={18}/> 所在地</div>
                <div className="md:col-span-2">〒611-0002<br/>京都府宇治市木幡御蔵山39-923</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                <div className="text-gray-500 font-medium flex items-center gap-2"><Phone size={18}/> 連絡先</div>
                <div className="md:col-span-2">
                  <a href="tel:080-1458-7000" className="text-brand hover:underline">080-1458-7000</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-paper">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-4">Contact Us</h2>
            <p className="text-gray-500 tracking-wide">お問い合わせ</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <p className="text-center text-gray-600 mb-8 leading-relaxed">
              商品に関するご質問、不動産・建築に関するご相談など、<br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                const subject = encodeURIComponent(`【お問い合わせ】${name}様より`);
                const body = encodeURIComponent(`お名前: ${name}\nメールアドレス: ${email}\n\n【お問い合わせ内容】\n${message}`);
                
                window.location.href = `mailto:222gatto.felice222@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="山田 太郎"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="ご質問やご相談内容をご記入ください。"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-ink text-white rounded-xl font-medium tracking-wide hover:bg-brand transition-colors duration-300 flex items-center justify-center gap-2"
              >
                メールソフトを起動して送信する
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl mb-2">HIMEMILANO WORLD TRADING</h2>
              <p className="text-sm text-gray-400">Global Trading & Real Estate Solutions</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-brand transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-white/10">
            &copy; {new Date().getFullYear()} HIMEMILANO WORLD TRADING. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}