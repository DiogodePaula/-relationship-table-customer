import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    try {
      const clients = await Client.findAll({
        attributes: ['uid', 'name', 'cpf'],
      });

      return res.json({ clients });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const clients = await Client.findByPk(uid, {
        attributes: ['uid', 'name', 'branch'],
        //   include: [
        //     {
        //       model: Employee,
        //       as: 'employees',
        //       attributes: ['uid', 'name', 'age', 'cpf'],
        //     },
        //     {
        //       model: Role,
        //       as: 'roles',
        //       attributes: ['uid', 'name'],
        //     },
        //   ],
      });

      return res.json({ clients });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const clients = await Client.create(req.body);

      return res.json({ clients });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json({ response });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Client.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Clients não encontrado');
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
