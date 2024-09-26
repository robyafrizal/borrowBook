const express = require("express");

const MemberHandler = require("../handler/member");
const MemberService = require("../service/member");
const MemberRepository = require("../repository/member");

const memberRepository = new MemberRepository();
const memberService = new MemberService(memberRepository);
const memberHandler = new MemberHandler(memberService);

const router = express.Router();

router.get("/members", memberHandler.getMember);
router.get("/members/:id", memberHandler.getMemberById);

module.exports = router;
