import Brand from '../models/Brand';
import Product from '../models/Product';

class BrandController {
  async index(req, res) {
    try {
      const brand = await Brand.findAll({
        attributes: ['uid', 'name'],
        include: [
          {
            model: Product,
            as: 'products',
            attributes: ['uid', 'name', 'quantity'],
          },
        ],
      });

      return res.json({ brand });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const brand = await Brand.findByPk(uid, {
        attributes: ['uid', 'name'],
        include: [
          {
            model: Product,
            as: 'products',
            attributes: ['uid', 'name', 'quantity'],
          },
        ],
      });

      return res.json({ brand });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const brand = await Brand.create(req.body);

      return res.json({ brand });
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
      const updated = await Brand.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Brand não encontrado');
      }
      return res.json('DATA_UPDATE');
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Brand.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new BrandController();
