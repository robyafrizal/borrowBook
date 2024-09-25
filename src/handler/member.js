class MemberHandler {
  constructor(MemberService) {
    this.MemberService = MemberService;

    this.getMember = this.getMember.bind(this);
  }

  async getMember(req, res) {
    const serviceRes = await this.MemberService.getMember();
    // console.log(serviceRes);
    res.status(serviceRes.statusCode).send({
      members: serviceRes.members,
    });
  }
}

module.exports = MemberHandler;
