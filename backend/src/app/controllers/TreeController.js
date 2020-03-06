import { Op } from 'sequelize';
import * as Yup from 'yup';

import Tree from '../models/Tree';
import File from '../models/File';

class TreeController {
  async index(req, res) {
    /**
     * Pegar variáveis por desestruturação:
     * Se não tiver, deixo ela como 0
     * Se tiver, pego o valor de req.query
     */
    const {
      recommended = 0,
      forbidden = 0,
      wireless,
      wired,
      quadrant
    } = req.query;

    if (forbidden == 1) {
      const trees = await Tree.findAll({
        where: {
          forbidden: 1
        },
        attributes: ['id', 'name', 'species', 'avatar_id'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url']
          }
        ]
      });

      return res.json(trees);
    }

    if (quadrant) {
      const { quadrant: newQuadrant = 0 } = req.query;

      const trees = await Tree.findAll({
        where: {
          quadrant: newQuadrant,
          forbidden: 0
        },
        attributes: ['id', 'name', 'species', 'avatar_id'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url']
          }
        ]
      });

      return res.json(trees);
    }

    if (wired || wireless) {
      const { wired: newWired = 0, wireless: newWireless = 0 } = req.query;

      const trees = await Tree.findAll({
        where: {
          wireless: newWireless,
          wired: newWired,
          forbidden: 0
        },
        attributes: ['id', 'name', 'species', 'avatar_id'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url']
          }
        ]
      });

      return res.json(trees);
    }

    const trees = await Tree.findAll({
      where: {
        recommended,
        forbidden
      },
      attributes: ['id', 'name', 'species', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        }
      ]
    });

    return res.json(trees);
  }

  async store(req, res) {
    const { avatar_id } = req.body;
    const { name, species, recommended, forbidden, wireless, wired, quadrant } = req.body.data;


    const schema = Yup.object().shape({
      name: Yup.string().required(),
      species: Yup.string().required(),
      recommended: Yup.boolean(),
      forbidden: Yup.boolean(),
      wireless: Yup.boolean(),
      wired: Yup.boolean(),
      quadrant: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body.data))) {
      return res.status(401).json({ error: 'Validation fails' });
    }


    const tree = await Tree.create({
      name,
      species,
      recommended,
      forbidden,
      wireless,
      wired,
      quadrant,
      avatar_id
    });

    return res.json(tree);
  }
}

export default new TreeController();
