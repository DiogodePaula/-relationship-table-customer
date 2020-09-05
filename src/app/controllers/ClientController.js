import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    try {
      const client = await Client.findAll({
        attributes: ['uid', 'name', 'cpf'],
      });

      return res.json({ client });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const client = await Client.findByPk(uid, {
        attributes: ['uid', 'name', 'cpf'],
      });

      return res.json({ client });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const client = await Client.create(req.body);

      return res.json({ client });
    } catch (error) {
      return res.json({ error });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Client.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Product não encontrado');
      }
      return res.json('DATA_UPDATE');
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Client.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new ClientController();
