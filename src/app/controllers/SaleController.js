import Sale from '../models/Sale';

class SaleController {
  async index(req, res) {
    try {
      const sales = await Sale.findAll({
        attributes: ['uid', 'name', 'address'],
      });

      return res.json({ sales });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const sales = await Sale.findByPk(uid, {
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

      return res.json({ sales });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const sales = await Sale.create(req.body);

      return res.json({ sales });
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
      const updated = await Sale.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Sales não encontrado');
      }
      return res.json('DATA_UPDATE');
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Sale.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new SaleController();
