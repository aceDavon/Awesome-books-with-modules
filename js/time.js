class Time {
  static displayTime() {
    const time = new Date();
    const locale = navigator.language;
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: 'false',
    };
    document.querySelector('.date-time p').textContent = `${time.toLocaleTimeString(locale, options)}`;
  }
}

export default Time;