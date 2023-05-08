export function tempoParaSegundos(tempo: String): number {
  const [horas = '0', minutos = '0', segundos = '0'] =
    tempo.split(':')

  const horasEmSegundos = Number(horas) * 3600
  const minutosEmSegundos = Number(minutos) * 60
  return horasEmSegundos + minutosEmSegundos + Number(segundos)
}

export function formatTimeFromSeconds(timeInSeconds: number): string {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function getSeparetedElementsFromTime(tempo: string) {
  // Define a regular expression to validate the time string format
  const timeRegex = /^([0-9]{2}):([0-9]{2}):([0-9]{2})$/;

  // Use the regular expression to test the time string format
  if (!timeRegex.test(tempo)) {
    throw new Error('Invalid time format');
  }

  // Extract the hour, minute, and second parts from the time string
  const [hourPart, minutePart, secondPart] = tempo.split(':');

  // Extract the decimal and unit parts for each of the three time parts
  const hourDecimal = hourPart.charAt(0);
  const hourUnit = hourPart.charAt(1);
  const minuteDecimal = minutePart.charAt(0);
  const minuteUnit = minutePart.charAt(1);
  const secondDecimal = secondPart.charAt(0);
  const secondUnit = secondPart.charAt(1);

  // Return an object containing the six parts of the time string
  return {
    hourDecimal,
    hourUnit,
    minuteDecimal,
    minuteUnit,
    secondDecimal,
    secondUnit
  };
}

export function getSeparetedElementsFromTimeOnlyMinutesAndSeconds(tempo: string) {
  let {
    hourDecimal,
    hourUnit,
    minuteDecimal,
    minuteUnit,
    secondDecimal,
    secondUnit
  } = getSeparetedElementsFromTime(tempo);

  const hours = parseInt(hourDecimal+hourUnit)
  const minutes = parseInt(minuteDecimal+minuteUnit)
  const hourToMinutes = hours * 60
  const minutesTotal = minutes + hourToMinutes
  minuteDecimal = minutesTotal.toString().charAt(0)
  minuteUnit = minutesTotal.toString().charAt(1)

  // Return an object containing the four parts of the time string
  return {
    minuteDecimal,
    minuteUnit,
    secondDecimal,
    secondUnit
  };
}