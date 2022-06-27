import { Router } from "express";
import { recordMento, showMento, showMentos, showMentosNewest, sortMentosByReceipientAsc, sortMentosByReceipientDes, updateMento, deleteMento } from "../controllers/mento-controller.js";

const router = Router();

router.get('/mento/:id', showMento);
router.get('/mentos', showMentos);
router.get('/mentos/sort-newest', showMentosNewest);
router.get('/mentos/sort-a-to-z', sortMentosByReceipientAsc);
router.get('/mentos/sort-z-to-a', sortMentosByReceipientDes);
router.post('/mento', recordMento);
router.put('/mento/:id', updateMento);
router.delete('/mento/:id', deleteMento);

export default router;