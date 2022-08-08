class Time {
  static displayTime = () => {
    const dt = luxon.DateTime;
    const locale = navigator.language;
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: 'numeric',
      timeZoneName: 'short',
    };
    document.querySelector('.date-time p').textContent = `${dt
      .now()
      .setLocale(locale)
      .toLocaleString(options)}`;
  };
}

export default Time;
