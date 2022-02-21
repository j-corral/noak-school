import { createApiHandler } from '@hoomies/noak.lib.api';

export default createApiHandler().get(async (req, res) => {
  return res.json({
    message: 'pong',
    body: req.body as unknown,
  });
});
