import Sale from '../models/Sale';
import Client from '../models/Client';
import Product from '../models/Product';

class SaleController {
  async index(req, res) {
    try {
      const sale = await Sale.findAll({
        attributes: ['uid', 'total_price', 'quantity_of_items'],
        include: [
          {
            model: Client,
            as: 'client',
            attributes: ['uid', 'name', 'cpf'],
          },
          {
            model: Product,
            as: 'product',
            attributes: ['uid', 'name', 'quantity'],
          },
        ],
      });

      return res.json({ sale });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const sale = await Sale.findByPk(uid, {
        attributes: ['uid', 'total_price', 'quantity_of_items'],
        include: [
          {
            model: Client,
            as: 'client',
            attributes: ['uid', 'name', 'cpf'],
          },
          {
            model: Product,
            as: 'product',
            attributes: ['uid', 'name', 'quantity'],
          },
        ],
      });

      return res.json({ sale });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const sale = await Sale.create(req.body);

      return res.json({ sale });
    } catch (error) {
      return res.json({ error });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Sale.update(req.body, { where: { uid } });

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
