const BeedModel = require('../../common/models/Beed');

module.exports = {
  getAllBeeds: (req, res) => {
    const { query: filters } = req;

    BeedModel.findAllBeeds(filters)
      .then((beeds) => {
        return res.status(200).json({
          status: true,
          data: beeds,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getBeedById: (req, res) => {
    const {
      params: { beedId },
    } = req;

    BeedModel.findBeed({ id: beedId })
      .then((beed) => {
        return res.status(200).json({
          status: true,
          data: beed.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createBeed: (req, res) => {
    const { body } = req;

    BeedModel.createBeed(body)
      .then((beed) => {
        return res.status(200).json({
          status: true,
          data: beed.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateBeed: (req, res) => {
    const {
      params: { beedId },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, hence can not update the beed.',
        },
      });
    }

    BeedModel.updateBeed({ id: beedId }, payload)
      .then(() => {
        return BeedModel.findBeed({ id: beedId });
      })
      .then((beed) => {
        return res.status(200).json({
          status: true,
          data: beed.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteBeed: (req, res) => {
    const {
      params: { beedId },
    } = req;

    BeedModel.deleteBeed({id: beedId})
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfBeedsDeleted: numberOfEntriesDeleted
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },
};
