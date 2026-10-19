(function () {
  'use strict';

  const countries = {
    DE: ['🇩🇪', 'Niemcy'],
    PL: ['🇵🇱', 'Polska'],
    FR: ['🇫🇷', 'Francja'],
    AT: ['🇦🇹', 'Austria'],
    GB: ['🇬🇧', 'Wielka Brytania'],
    BE: ['🇧🇪', 'Belgia'],
    NL: ['🇳🇱', 'Holandia'],
    CZ: ['🇨🇿', 'Czechy'],
    IT: ['🇮🇹', 'Włochy']
  };

  function status(message) {
    const el = document.getElementById('gbTrafficStatus');
    if (el) el.textContent = message;
  }

  function updateGPS() {
    if ((typeof gbPermissions === 'undefined' || !gbPermissions.gps)) {
      status('🚛 GPS wyłączony · zakazy niesprawdzone');
      return;
    }

    if (typeof gbPermissions === 'undefined' || !gbPermissions.internet) {
      status('🚛 Internet wyłączony · zakazy niesprawdzone');
      return;
    }

    if (!navigator.geolocation) {
      status('🚛 GPS niedostępny · zakazy niesprawdzone');
      return;
    }

    status('📍 Ustalanie lokalizacji GPS…');

    navigator.geolocation.getCurrentPosition(
      function (position) {
        status('📍 GPS aktywny · ustalanie kraju…');
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetch('https://nominatim.openstreetmap.org/reverse?format=json&zoom=3&addressdetails=1&lat='
          + encodeURIComponent(lat) + '&lon=' + encodeURIComponent(lon))
          .then(r => { if (!r.ok) throw new Error('HTTP'); return r.json(); })
          .then(data => {
            const code = (data.address?.country_code || '').toUpperCase();
            const country = countries[code];
            const flag = country ? country[0] : '🌍';
            const name = country ? country[1] : (data.address?.country || 'Nieznany kraj');
            status(flag + ' ' + name + ' · zakazy niesprawdzone');
          })
          .catch(() => status('📍 GPS aktywny · nie udało się ustalić kraju'));

      },
      function () {
        status('🚛 Brak dostępu do GPS · zakazy niesprawdzone');
      },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  }

  window.gbZakazyGPS = updateGPS;
  document.addEventListener('DOMContentLoaded', updateGPS);
})();
