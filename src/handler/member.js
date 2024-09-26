class MemberHandler {
  constructor(MemberService) {
    this.MemberService = MemberService;

    this.getMember = this.getMember.bind(this);
    this.getMemberById = this.getMemberById.bind(this);
  }

  async getMember(req, res) {
    const serviceRes = await this.MemberService.getMember();
    // console.log(serviceRes);
    res.status(serviceRes.statusCode).send({
      members: serviceRes.members,
    });
  }

  async getMemberById(req, res) {
    const id = req.params.id;
    const serviceRes = await this.MemberService.getMemberById(id);
    res.status(serviceRes.statusCode).send({
      members: serviceRes.members,
      message: serviceRes.message,
    });
  }
}

module.exports = MemberHandler;
