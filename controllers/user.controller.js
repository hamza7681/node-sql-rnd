const { StatusCodes } = require("http-status-codes");
const { user } = require("../schemas/init-models");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      await user.create({ name, email, password });
      return res
        .status(StatusCodes.OK)
        .json({ msg: "User registered successfully" });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },
};

module.exports = userCtrl;
