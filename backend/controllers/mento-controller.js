import Mento from '../models/Mento.js';

export const recordMento = async (req, res) => {
  try {
    const { recipient, message } = req.body;

    const mentoModel = new Mento({
      recipient,
      message,
    });

    await mentoModel.save();

    return res.status(201).json({ mentoModel });
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  }
};

export const showMento = async (req, res) => {
  try {
    const id = req.params.id;
    const mento = await Mento.findById(id);
    return res.status(200).json(mento);
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  }
};

export const showMentos = async (req, res) => {
  try {
    const allMentos = await Mento.find({});
    res.status(200).json(allMentos);
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  }
};

export const showMentosNewest = async (req, res) => {
  try {
    const allMentosNewest = await Mento.find({}).sort({ date: 'desc' });
    return res.json(allMentosNewest);
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  }
};

export const updateMento = async (req, res) => {
  try {
    const id = req.params.id;
    const chosenMento = await Mento.findById(id);
    Object.assign(chosenMento, req.body);
    chosenMento.save();
    res.status(200).json({ data: chosenMento });
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  }
};

export const deleteMento = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Mento.deleteOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  }
};

export const sortMentosByReceipientAsc = async (req, res) => {
  try {
    const allMentosAscOrder = await Mento.find({}).sort({ recipient: 'asc' });
    return res.json(allMentosAscOrder);
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  }
};

export const sortMentosByReceipientDes = async (req, res) => {
  try {
    const allMentosDescOrder = await Mento.find({}).sort({ recipient: 'desc' });
    return res.status(200).json(allMentosDescOrder);
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  }
};
