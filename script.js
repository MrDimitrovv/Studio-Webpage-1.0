console.log('Script loading...');

const translations = {
    en: {
        title: "Health and Beauty Massage Studio",
        subtitle: "Your oasis of calm and relaxation in the center of Varna",
        services: "Services", 
        about: "About",
        contact: "Contact",
        homeNav: "Return home",
        moreInfo: "More Information",
        backToMain: "Back to Main",
        massageInfo: "Massage Information",
        photos: "Photos",
        photosTitle: "Photos",
        location: "Location",
        locationTitle: "Location",
        workingHoursTitle: "Working Hours",
        workingHoursText: "Every day: 09:00 - 19:00\n\nThe studio operates by appointment only.",
        bodyPartsTitle: "Massage",
        faceLabel: "Face",
        backLabel: "Back + neck + shoulders massage",
        armsLabel: "Relax",
        legsLabel: "Therapeutic with cups",
        feetLabel: "Deep tissue massage with warm volcanic stones",
        detoxLabel: "Therapeutic with cups and warm volcanic stones",
        anticellLabel: "Anti-cellulite (legs + abdomen)",
        volcanicLabel: "Full body massage (back + arms + legs)",
        fullBodyTherapeuticLabel: "Therapeutic",
        fullBodyRestorativeLabel: "Restorative",
        fullBodyTitle: "Special Treatments",
        classicLabel: "Honey massage (back)",
        aromaLabel: "Zone therapy (foot massage)",
        volcanicFullLabel: "Gift package (full body + feet + face)",
        promotionTitle: "Promotion",
        promo3Label: "3 treatments of your choice",
        promo5Label: "5 treatments of your choice",
        promo10Label: "10 treatments of your choice",
        aboutTitle: "About Us",
        aboutText: "Studio \"Health and Beauty\" was established in 2015 in the center of Varna by a massage therapist with over 20 years of experience in renowned SPA centers in the Golden Sands resort complex. With us you will receive a professional attitude, high-quality service and an individual approach. We understand that in the hectic everyday life people need a place where they can relax and concentrate on their well-being.",
        contactTitle: "Contact",
        therapistName: "Vidolina Dimitrova",
        therapistTitle: "Massage Therapist",
        therapistPhone: "+359 896223001",
        therapistAddress: "blvd. General Kolev 16 A, Varna, Bulgaria",
        googleReviewsBtn2: "★ See our Google Reviews",
        whatsappBtn: "WhatsApp",
        facebookBtn: "Facebook", 
        instagramBtn: "Instagram",
        massageInfoTitle: "Massage Information",
        massageContent: `What is a massage and what are the best types? We have the answers to your questions about massage therapy. Classic massage involves directly massaging the skin and muscles in the affected area. Five different hand movements are used – stroking the skin, kneading, rubbing, tapping and vibrating. This massage, often referred to as Swedish massage, offers a range of physical and psychological benefits. It can improve circulation, reduce muscle stiffness and pain, and enhance flexibility. Additionally, it promotes relaxation, reduces stress and anxiety, and can improve sleep quality.

Physical Benefits:
→ Improved Circulation: Classic massage techniques, like long strokes and kneading, help to move blood more efficiently through the body, delivering oxygen and nutrients to tissues.
→ Reduced Muscle Tension and Pain: By manipulating soft tissues, massage can release muscle knots and tightness, relieving pain and discomfort.
→ Increased Flexibility and Range of Motion: Massage can improve the elasticity of muscles and tendons, allowing for greater flexibility and movement.
→ Faster Recovery: Massage can help speed up the recovery process after workouts or injuries by reducing inflammation and promoting tissue repair.
→ Boosted Immune System: Some studies suggest that massage therapy can positively influence the immune system, potentially helping the body fight off illness.

Psychological Benefits:
→ Stress and Anxiety Reduction: The relaxing nature of a classic massage can lower levels of stress hormones like cortisol and promote the release of endorphins, natural mood boosters.
→ Improved Sleep Quality: By reducing stress and promoting relaxation, classic massage can contribute to better sleep patterns.
→ Enhanced Mental Well-being: The calming effects of massage can help alleviate symptoms of anxiety and depression, contributing to overall mental wellness.
→ Pain Relief: Massage can be effective in managing various types of pain, including headaches and muscle soreness.
→ Reduced Blood Pressure: Studies indicate that massage can help lower blood pressure, potentially benefiting cardiovascular health.

OTHER TYPES OF MASSAGE:

Anti-cellulite massage with quality essential oils drains very well and is particularly suitable for fluid retention and edema. Anti-cellulite massage smoothes the orange peel skin and stimulates the body's own mechanisms to deal with stubborn fat cells. Blood circulation, lymph flow and the elimination of toxins are improved. (This massage does not traumatize the tissues and does not leave bruises)

Aromatherapy massage achieves deep relaxation, relieves stress, improves sleep, and alleviates physical or psycho-emotional conditions. With the help of quality essential oils and aromatherapy, the body's recovery is supported.

Volcanic stone massage is a unique experience that combines the benefits of heat and pressure. The volcanic stones are heated and placed on specific points of the body, allowing for deep relaxation and relief from muscle tension. This type of massage is particularly effective for stress relief and improving circulation. It can also help with pain management and is often used to treat conditions like arthritis and fibromyalgia.`
    },
    bg: {
        title: "Студио \"Здраве и Красота\"",
        subtitle: "Вашият оазис на спокойствие и релакс в центъра на Варна",
        services: "Услуги",
        about: "За нас",
        contact: "Контакти", 
        homeNav: "Връщане към начало",
        moreInfo: "Повече информация",
        backToMain: "Назад към началото",
        massageInfo: "Информация за масажи",
        photos: "Снимки",
        photosTitle: "Снимки",
        location: "Местоположение",
        locationTitle: "Местоположение",
        workingHoursTitle: "Работно време",
        workingHoursText: "Всеки ден: 09:00 - 19:00\n\nСтудиото работи само с предварително записване.",
        bodyPartsTitle: "Масаж",
        faceLabel: "Лице",
        backLabel: "Масаж на гръб + врат + рамене",
        armsLabel: "Релакс",
        legsLabel: "Терапевтичен с вендузи",
        feetLabel: "Дълбокотъканен масаж с топли вулканични камъни",
        detoxLabel: "Терапевтичен с вендузи и топли вулканични камъни",
        anticellLabel: "Антицелулитен (крака + корем)",
        volcanicLabel: "Масаж на цяло тяло (гръб + ръце + крака)",
        fullBodyTherapeuticLabel: "Терапевтичен",
        fullBodyRestorativeLabel: "Възстановителен",
        fullBodyTitle: "Специални процедури",
        classicLabel: "Масаж с мед (гръб)",
        aromaLabel: "Зонова терапия (масаж на стъпала)",
        volcanicFullLabel: "Подаръчен пакет (цяло тяло + стъпала + лице)",
        promotionTitle: "Промоция",
        promo3Label: "3 процедури по избор",
        promo5Label: "5 процедури по избор",
        promo10Label: "10 процедури по избор",
        aboutTitle: "За нас",
        aboutText: "Студио \"Здраве и Красота\" е основано през 2015 година в центъра на Варна от масажист с над 20 години опит в реномирани СПА центрове в курортен комплекс \"Златни пясъци\". При нас ще получите професионално отношение, висококачествено обслужване и индивидуален подход. Разбираме, че в забързаното ежедневие хората се нуждаят от място, където могат да се отпуснат и да се съсредоточат върху своето благополучие.",
        contactTitle: "Контакт",
        therapistName: "Видолина Димитрова",
        therapistTitle: "Масажист",
        therapistPhone: "+359 896223001",
        therapistAddress: "бул. Генерал Колев 16 А, Варна, България",
        googleReviewsBtn2: "★ Вижте нашите Google отзиви",
        whatsappBtn: "WhatsApp",
        facebookBtn: "Facebook",
        instagramBtn: "Instagram",
        massageInfoTitle: "Информация за масажи",
        massageContent: `Какво е масажът и кои са най-добрите видове? Имаме отговорите на вашите въпроси относно масажната терапия. Класическият масаж включва директно масажиране на кожата и мускулите в засегнатата област. Използват се пет различни ръчни движения – галене на кожата, месене, триене, потупване и вибрация. Този масаж, често наричан шведски масаж, предлага широк спектър от физически и психологически ползи. Той може да подобри кръвообращението, да намали мускулната скованост и болка и да увеличи гъвкавостта. Освен това насърчава релаксацията, намалява стреса и тревожността и може да подобри качеството на съня.

Физически ползи:
→ Подобрено кръвообращение: Техниките на класическия масаж, като дългите движения и месенето, помагат за по-ефективно движение на кръвта в тялото, доставяйки кислород и хранителни вещества до тъканите.
→ Намалено мускулно напрежение и болка: Чрез манипулиране на меките тъкани, масажът може да освободи мускулните възли и стегнатост, облекчавайки болката и дискомфорта.
→ Увеличена гъвкавост и обхват на движение: Масажът може да подобри еластичността на мускулите и сухожилията, позволявайки по-голяма гъвкавост и движение.
→ По-бързо възстановяване: Масажът може да помогне за ускоряване на процеса на възстановяване след тренировки или травми чрез намаляване на възпалението и насърчаване на възстановяването на тъканите.
→ Засилена имунна система: Някои изследвания предполагат, че масажната терапия може положително да повлияе на имунната система, потенциално помагайки на тялото да се бори срещу болести.

Психологически ползи:
→ Намаляване на стреса и тревожността: Релаксиращата природа на класическия масаж може да понижи нивата на стресови хормони като кортизола и да насърчи освобождаването на ендорфини, естествени подобрители на настроението.
→ Подобрено качество на съня: Чрез намаляване на стреса и насърчаване на релаксацията, класическият масаж може да допринесе за по-добри модели на сън.
→ Подобрено психично благополучие: Успокояващите ефекти на масажа могат да помогнат за облекчаване на симптомите на тревожност и депресия, допринасяйки за цялостното психично здраве.
→ Облекчаване на болката: Масажът може да бъде ефективен при справяне с различни видове болка, включително главоболие и мускулна болезненост.
→ Намалено кръвно налягане: Изследванията показват, че масажът може да помогне за понижаване на кръвното налягане, потенциално принасяйки полза за сърдечно-съдовото здраве.

ДРУГИ ВИДОВЕ МАСАЖ:

Антицелулитният масаж с качествени етерични масла дренира много добре и е особено подходящ при задържане на течности и оток. Антицелулитният масаж изглажда кожата с портокалова кора и стимулира собствените механизми на тялото за справяне с упоритите мастни клетки. Подобряват се кръвообращението, лимфният поток и елиминирането на токсини. (Този масаж не травматизира тъканите и не оставя синини)

Ароматерапевтичният масаж постига дълбока релаксация, облекчава стреса, подобрява съня и облекчава физически или психо-емоционални състояния. С помощта на качествени етерични масла и ароматерапия се подпомага възстановяването на тялото.

Масажът с вулканични камъни е уникално преживяване, което комбинира предимствата на топлината и натиска. Вулканичните камъни се загряват и се поставят на специфични точки от тялото, позволявайки дълбока релаксация и облекчаване на мускулното напрежение. Този тип масаж е особено ефективен за облекчаване на стреса и подобряване на кръвообращението. Той също може да помогне при справяне с болката и често се използва за лечение на състояния като артрит и фибромиалгия.`
    },
    de: {
        title: "Studio für Gesundheit und Schönheit",
        subtitle: "Ihre Oase der Ruhe und Entspannung im Zentrum von Varna",
        services: "Dienstleistungen",
        about: "Über uns",
        contact: "Kontakt", 
        homeNav: "Zurück zur Startseite",
        moreInfo: "Mehr Informationen",
        backToMain: "Zurück zur Hauptseite",
        massageInfo: "Massage-Informationen",
        photos: "Fotos",
        photosTitle: "Fotos",
        location: "Standort",
        locationTitle: "Standort",
        workingHoursTitle: "Öffnungszeiten",
        workingHoursText: "Täglich: 09:00 - 19:00\n\nDas Studio arbeitet nur nach Vereinbarung.",
        bodyPartsTitle: "Massage",
        faceLabel: "Gesicht",
        backLabel: "Massage von Rücken + Nacken + Schultern",
        armsLabel: "Entspannung",
        legsLabel: "Therapeutisch mit Schröpfgläsern",
        feetLabel: "Tiefengewebsmassage mit warmen Vulkansteinen",
        detoxLabel: "Therapeutisch mit Schröpfgläsern und warmen Vulkansteinen",
        anticellLabel: "Anti-Cellulite (Beine + Bauch)",
        volcanicLabel: "Ganzkörpermassage (Rücken + Arme + Beine)",
        fullBodyTherapeuticLabel: "Therapeutisch",
        fullBodyRestorativeLabel: "Regenerierend",
        fullBodyTitle: "Spezialbehandlungen",
        classicLabel: "Honigmassage (Rücken)",
        aromaLabel: "Zonentherapie (Fußmassage)",
        volcanicFullLabel: "Geschenkpaket (Ganzkörper + Füße + Gesicht)",
        promotionTitle: "Aktion",
        promo3Label: "3 Behandlungen nach Wahl",
        promo5Label: "5 Behandlungen nach Wahl",
        promo10Label: "10 Behandlungen nach Wahl",
        aboutTitle: "Über uns",
        aboutText: "Das Studio \"Gesundheit und Schönheit\" wurde 2015 im Zentrum von Varna von einem Massagetherapeuten mit über 20 Jahren Erfahrung in renommierten SPA-Zentren im Goldstrand-Resort-Komplex gegründet. Bei uns erhalten Sie eine professionelle Einstellung, hochwertigen Service und einen individuellen Ansatz. Wir verstehen, dass Menschen im hektischen Alltag einen Ort brauchen, an dem sie sich entspannen und auf ihr Wohlbefinden konzentrieren können.",
        contactTitle: "Kontakt",
        therapistName: "Vidolina Dimitrova",
        therapistTitle: "Masseurin",
        therapistPhone: "+359 896223001",
        therapistAddress: "Blvd. General Kolev 16 A, Varna, Bulgarien",
        googleReviewsBtn2: "★ Unsere Google-Bewertungen ansehen",
        whatsappBtn: "WhatsApp",
        facebookBtn: "Facebook",
        instagramBtn: "Instagram",
        massageInfoTitle: "Massage-Informationen",
        massageContent: `Was ist eine Massage und welche sind die besten Arten? Wir haben die Antworten auf Ihre Fragen zur Massagetherapie. Die klassische Massage beinhaltet die direkte Massage der Haut und Muskeln im betroffenen Bereich. Fünf verschiedene Handbewegungen werden verwendet – Streichen der Haut, Kneten, Reiben, Klopfen und Vibrieren. Diese Massage, oft als schwedische Massage bezeichnet, bietet eine Reihe von körperlichen und psychologischen Vorteilen. Sie kann die Durchblutung verbessern, Muskelsteifheit und Schmerzen reduzieren und die Flexibilität erhöhen. Zusätzlich fördert sie die Entspannung, reduziert Stress und Angst und kann die Schlafqualität verbessern.

Körperliche Vorteile:
→ Verbesserte Durchblutung: Klassische Massagetechniken wie lange Streichbewegungen und Kneten helfen dabei, das Blut effizienter durch den Körper zu bewegen und Sauerstoff und Nährstoffe an die Gewebe zu liefern.
→ Reduzierte Muskelverspannungen und Schmerzen: Durch die Manipulation von Weichgewebe kann die Massage Muskelknoten und Verspannungen lösen und Schmerzen und Unbehagen lindern.
→ Erhöhte Flexibilität und Bewegungsumfang: Massage kann die Elastizität von Muskeln und Sehnen verbessern und so größere Flexibilität und Bewegung ermöglichen.
→ Schnellere Erholung: Massage kann helfen, den Erholungsprozess nach dem Training oder Verletzungen zu beschleunigen, indem sie Entzündungen reduziert und die Geweberegeneration fördert.
→ Gestärktes Immunsystem: Einige Studien deuten darauf hin, dass Massagetherapie das Immunsystem positiv beeinflussen kann und dem Körper möglicherweise hilft, Krankheiten abzuwehren.

Psychologische Vorteile:
→ Stress- und Angstreduktion: Die entspannende Natur einer klassischen Massage kann den Spiegel von Stresshormonen wie Cortisol senken und die Freisetzung von Endorphinen, natürlichen Stimmungsaufhellern, fördern.
→ Verbesserte Schlafqualität: Durch die Reduzierung von Stress und die Förderung der Entspannung kann die klassische Massage zu besseren Schlafmustern beitragen.
→ Verbessertes mentales Wohlbefinden: Die beruhigenden Effekte der Massage können helfen, Symptome von Angst und Depression zu lindern und zum allgemeinen mentalen Wohlbefinden beitragen.
→ Schmerzlinderung: Massage kann bei der Behandlung verschiedener Arten von Schmerzen, einschließlich Kopfschmerzen und Muskelkater, wirksam sein.
→ Reduzierter Blutdruck: Studien zeigen, dass Massage helfen kann, den Blutdruck zu senken und möglicherweise der Herz-Kreislauf-Gesundheit zugute kommt.

ANDERE ARTEN VON MASSAGE:

Anti-Cellulite-Massage mit hochwertigen ätherischen Ölen drainiert sehr gut und ist besonders geeignet bei Flüssigkeitsretention und Ödemen. Die Anti-Cellulite-Massage glättet die Orangenhaut und stimuliert die körpereigenen Mechanismen zur Bekämpfung hartnäckiger Fettzellen. Durchblutung, Lymphfluss und die Ausscheidung von Toxinen werden verbessert. (Diese Massage traumatisiert das Gewebe nicht und hinterlässt keine Blutergüsse)

Aromatherapie-Massage erreicht tiefe Entspannung, lindert Stress, verbessert den Schlaf und lindert körperliche oder psycho-emotionale Zustände. Mit Hilfe hochwertiger ätherischer Öle und Aromatherapie wird die Erholung des Körpers unterstützt.

Vulkanstein-Massage ist ein einzigartiges Erlebnis, das die Vorteile von Wärme und Druck kombiniert. Die Vulkansteine werden erhitzt und auf spezifische Punkte des Körpers gelegt, was tiefe Entspannung und Linderung von Muskelverspannungen ermöglicht. Diese Art von Massage ist besonders effektiv zur Stresslinderung und Verbesserung der Durchblutung. Sie kann auch bei der Schmerzbehandlung helfen und wird oft zur Behandlung von Zuständen wie Arthritis und Fibromyalgie eingesetzt.`
    }
};

let currentLang = 'en';

function isSecondPage() {
    return window.location.pathname.includes('second-page.html');
}

function updateLanguage(lang) {
    const t = translations[lang];
    const updateNavElement = (id, key) => {
        const element = document.getElementById(id);
        if (element && t[key]) {
            element.textContent = t[key];
        }
    };
    
    if (isSecondPage()) {
        updateNavElement('homeNav', 'homeNav');
        updateNavElement('massageInfoNav', 'massageInfo');
        updateNavElement('photosNav', 'photos');
        updateNavElement('locationNav', 'location');
        updateNavElement('backToMainNav', 'backToMain');
    } else {
        updateNavElement('servicesNav', 'services');
        updateNavElement('aboutNav', 'about');
        updateNavElement('contactNav', 'contact');
        updateNavElement('moreInfoNav', 'moreInfo');
    }
    
    const updateElement = (id, key) => {
        const element = document.getElementById(id);
        if (element && t[key]) {
            element.textContent = t[key];
        }
    };
    
    const massageContent = document.getElementById('massageContent');
    if (massageContent && t.massageContent) {
        massageContent.textContent = t.massageContent;
    }
    
    updateElement('title', 'title');
    updateElement('subtitle', 'subtitle');
    updateElement('massageInfoTitle', 'massageInfoTitle');
    updateElement('photosTitle', 'photosTitle');
    updateElement('locationTitle', 'locationTitle');
    updateElement('workingHoursTitle', 'workingHoursTitle');
    updateElement('workingHoursText', 'workingHoursText');
    
    updateElement('bodyPartsTitle', 'bodyPartsTitle');
    updateElement('faceLabel', 'faceLabel');
    updateElement('backLabel', 'backLabel');
    updateElement('armsLabel', 'armsLabel');
    updateElement('legsLabel', 'legsLabel');
    updateElement('feetLabel', 'feetLabel');
    updateElement('detoxLabel', 'detoxLabel');
    updateElement('anticellLabel', 'anticellLabel');
    updateElement('volcanicLabel', 'volcanicLabel');
    updateElement('fullBodyTherapeuticLabel', 'fullBodyTherapeuticLabel');
    updateElement('fullBodyRestorativeLabel', 'fullBodyRestorativeLabel');
    updateElement('fullBodyTitle', 'fullBodyTitle');
    updateElement('classicLabel', 'classicLabel');
    updateElement('aromaLabel', 'aromaLabel');
    updateElement('volcanicFullLabel', 'volcanicFullLabel');
    updateElement('promotionTitle', 'promotionTitle');
    updateElement('promo3Label', 'promo3Label');
    updateElement('promo5Label', 'promo5Label');
    updateElement('promo10Label', 'promo10Label');
    updateElement('aboutTitle', 'aboutTitle');
    updateElement('aboutText', 'aboutText');
    updateElement('contactTitle', 'contactTitle');
    updateElement('therapistName', 'therapistName');
    updateElement('therapistTitle', 'therapistTitle');
    updateElement('therapistPhone', 'therapistPhone');
    updateElement('therapistAddress', 'therapistAddress');
    updateElement('googleReviewsBtn2', 'googleReviewsBtn2');
    
    updateElement('whatsappBtnText', 'whatsappBtn');
    updateElement('facebookBtnText', 'facebookBtn');
    updateElement('instagramBtnText', 'instagramBtn');
    
    localStorage.setItem('preferredLanguage', lang);
    
    if (lang === 'bg') {
        updatePriceMinutes('мин.');
    } else {
        updatePriceMinutes('min.');
    }
}

function updatePriceMinutes(replacement) {
    document.querySelectorAll('.price-table td').forEach(cell => {
        const content = cell.textContent;
        if (content.includes('min.') || content.includes('мín.')) {
            cell.textContent = content.replace(/мín\.|min\./g, replacement);
        }
    });
}

function openImageModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = img.src;
        
        modalImg.style.userSelect = 'none';
        modalImg.style.webkitUserSelect = 'none';
        modalImg.style.mozUserSelect = 'none';
        modalImg.style.msUserSelect = 'none';
        modalImg.style.webkitUserDrag = 'none';
        modalImg.style.khtmlUserDrag = 'none';
        modalImg.style.mozUserDrag = 'none';
        modalImg.style.oUserDrag = 'none';
        modalImg.style.webkitTouchCallout = 'none';
        
        modalImg.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        modalImg.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    window.addEventListener('scroll', toggleBackToTopButton);
    backToTopBtn.addEventListener('click', scrollToTop);
    
    toggleBackToTopButton();
}

function initializeImageProtection() {
    document.addEventListener('contextmenu', function(e) {
        if ((e.target.tagName === 'IMG' && 
             !e.target.classList.contains('location-image') && 
             !e.target.src.includes('background.jpg')) || 
            (e.target.closest('.image-container') && 
             !e.target.closest('.location-image-container'))) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, false);
    
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' && 
            !e.target.classList.contains('location-image') && 
            !e.target.src.includes('background.jpg')) {
            e.preventDefault();
            return false;
        }
    }, false);
    
    document.addEventListener('selectstart', function(e) {
        if ((e.target.tagName === 'IMG' && 
             !e.target.classList.contains('location-image') && 
             !e.target.src.includes('background.jpg')) || 
            (e.target.closest('.image-container') && 
             !e.target.closest('.location-image-container'))) {
            e.preventDefault();
            return false;
        }
    }, false);
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.keyCode === 83 || e.keyCode === 80 || e.keyCode === 65)) {
            e.preventDefault();
            return false;
        }
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
    }, false);
    
    let devtools = {
        open: false,
        orientation: null
    };
    
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
            if (!devtools.open) {
                devtools.open = true;
                document.querySelectorAll('img:not(.location-image)').forEach(img => {
                    if (!img.src.includes('background.jpg')) {
                        img.style.filter = 'blur(10px)';
                    }
                });
            }
        } else {
            if (devtools.open) {
                devtools.open = false;
                document.querySelectorAll('img:not(.location-image)').forEach(img => {
                    if (!img.src.includes('background.jpg')) {
                        img.style.filter = 'none';
                    }
                });
            }
        }
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.querySelector('.lang-menu');
    
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    if (langBtn && langMenu) {
        langMenu.innerHTML = '';
        
        const languages = [
            { code: 'en', name: 'English' },
            { code: 'bg', name: 'Български' },
            { code: 'de', name: 'Deutsch' }
        ];
        
        languages.forEach(language => {
            const option = document.createElement('div');
            option.textContent = language.name;
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                updateLanguage(language.code);
                langMenu.classList.remove('active');
            });
            langMenu.appendChild(option);
        });
        
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langMenu.classList.toggle('active');
        });
        
        document.addEventListener('click', function(event) {
            if (!langBtn.contains(event.target) && !langMenu.contains(event.target)) {
                langMenu.classList.remove('active');
            }
        });
    }
    
    updateLanguage(savedLang);
    initializeBackToTop();
    initializeImageProtection();
    
    console.log('%c⚠️ WARNING ⚠️', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%cImages on this website are protected by copyright. Unauthorized downloading or use is prohibited.', 'color: red; font-size: 14px;');
});