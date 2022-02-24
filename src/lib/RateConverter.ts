export type TNote = {
  note: number;
  total: number;
  caster: number;
};
type TNotes = TNote[];

export const DefaultRateCast = 10;

export const createNote = (note: number, total: number, caster: number) => {
  const N: TNote = {
    note,
    total,
    caster,
  };
  return N;
};

export const convertNote = (N: TNote) => {
  const grade = ((N.note * N.caster) / N.total).toFixed(2);
  //console.log(`${N.note}/${N.total} => ${grade}/${N.caster}`);
  const result = {
    grade: Number(grade),
    txt: `${N.note}/${N.total} => ${grade}/${N.caster}`,
  };
  return grade;
};

export const convertNotes = (notes: TNotes, caster: number) => {
  const total = notes.map((note) => convertNote(note));
  //console.log('total:', total);
  const sum = total.reduce((acc, cur) => Number(acc) + Number(cur), 0);
  const average = (sum / total.length).toFixed(2);
  //console.log(`AVG : ${sum}/${total.length} => ${average}/${caster}`);
  const result = {
    total: total,
    avg: `${average}/${caster}`,
    caster: caster,
  };
  return result;
};

/*
const notes = convertNotes([
    createNote(14, 22, caster),
    createNote(23, 25, caster),
    createNote(36, 83, caster),
    createNote(12, 24, caster),
  ]);
*/
