import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    try {
      const product = await Product.findAll({
        attributes: ['uid', 'name', 'quantity', 'brand_uid'],
      });

      return res.json({ product });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const product = await Product.findByPk(uid, {
        attributes: ['uid', 'name', 'quantity', 'brand_uid'],
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

      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const product = await Product.create(req.body);

      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Product.update(req.body, { where: { uid } });

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
      const deleted = await Product.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new ProductController();
