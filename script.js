function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

const translations = {
    en: {
        headerTitle: 'JeevanLine',
        langToggle: 'EN / HI',
        waitingPatients: 'Waiting Patients',
        groupConsults: 'Group Consults',
        chwUpdates: 'CHW Updates',
        scheduleManager: 'Schedule Manager 📅',
        priorityQueue: 'Priority Queue',
        urgent: 'Urgent',
        normal: 'Normal',
        prescribe: 'Prescribe',
        voiceCall: 'Voice Call',
        referToChw: 'Refer to CHW',
        endAndLog: 'End & Log',
        patientRecord: 'Health Record',
        consult: 'Consult'
    },
    hi: {
        headerTitle: 'जीवनलाइन',
        langToggle: 'EN / HI',
        waitingPatients: 'प्रतीक्षा कर रहे मरीज़',
        groupConsults: 'समूह परामर्श',
        chwUpdates: 'CHW अपडेट',
        scheduleManager: 'समय सारणी 📅',
        priorityQueue: 'प्राथमिकता सूची',
        urgent: 'अत्यंत आवश्यक',
        normal: 'सामान्य',
        prescribe: 'दवा लिखो',
        voiceCall: 'वॉयस कॉल',
        referToChw: 'CHW को सौंपें',
        endAndLog: 'समाप्त करें और लॉग करें',
        patientRecord: 'स्वास्थ्य रिकॉर्ड',
        consult: 'परामर्श'
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    const langData = translations[currentLang];

    document.querySelector('.header-title').textContent = langData.headerTitle;
    document.querySelector('.lang-toggle').textContent = langData.langToggle;
    document.querySelector('.stat-item:nth-child(1) .stat-label').textContent = langData.waitingPatients;
    document.querySelector('.stat-item:nth-child(2) .stat-label').textContent = langData.groupConsults;
    document.querySelector('.stat-item:nth-child(3) .stat-label').textContent = langData.chwUpdates;
    document.querySelectorAll('.section-title')[0].textContent = langData.scheduleManager;
    document.querySelectorAll('.section-title')[1].textContent = langData.priorityQueue;
    
    // Update action buttons
    document.querySelector('#consultation .action-btn:nth-child(1) span').textContent = langData.prescribe;
    document.querySelector('#consultation .action-btn:nth-child(2) span').textContent = langData.voiceCall;
    document.querySelector('#consultation .action-btn:nth-child(3) span').textContent = langData.referToChw;
    
    // Update group call buttons
    document.querySelector('#group-consultation .action-btn:nth-child(1) span').textContent = langData.prescribe;
    document.querySelector('#group-consultation .action-btn:nth-child(2) span').textContent = langData.endAndLog;
}

// Attach a listener to the patient cards
document.querySelectorAll('.patient-card').forEach(card => {
    card.addEventListener('click', () => {
        showScreen('consultation');
    });
});

document.querySelector('.schedule-item:last-of-type a').addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('group-consultation');
});