import { createApiHandler } from '@hoomies/noak.lib.api';
import { createNote, convertNotes, TNote } from '@/lib/RateConverter';

export default createApiHandler().post(async (req, res) => {
  if (!req.body.grades) {
    return res.status(400).json({
      error: 'missing grades',
    });
  }

  const { caster, grades } = req.body;

  const notes = grades.map((grade: TNote) => createNote(grade.note, grade.total, caster));
  const converted = convertNotes(notes, caster);

  return res.json({
    message: 'Converted grades successfully',
    //body: grades as unknown,
    input: notes,
    output: converted,
  });
});
