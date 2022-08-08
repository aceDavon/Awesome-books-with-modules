class Time {
  static displayTime() {
    const dt = luxon.DateTime;
    const locale = navigator.language;
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: 'false',
    };
    document.querySelector('.date-time p').textContent = `${dt.now().setLocale(locale).toLocaleString(options)}`;
  }
}

export default Time;
