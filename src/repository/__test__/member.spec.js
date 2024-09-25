const MemberRepository = require("../member");

describe("findMember", () => {
  const memberRepository = new MemberRepository();

  const expectedMemberResponse = {
    members: [
      {
        id: 1,
        code: "M001",
        name: "Angga",
        createdAt: "2024-09-24T18:28:24.871Z",
        updatedAt: "2024-09-24T18:28:24.871Z",
      },
    ],
  };

  //Positive Case
  it("success: should return the find all member", async () => {
    const memberList = await memberRepository.findMember();

    expect(memberList.id).toEqual(expectedMemberResponse.members.id);
    expect(memberList.code).toEqual(expectedMemberResponse.members.code);
    expect(memberList.name).toEqual(expectedMemberResponse.members.name);
  });

  // Negative case
  it("failed: should return internal server error", async () => {
    try {
      await memberRepository.findAlll();
    } catch (error) {
      expect(error.message).toEqual(
        "memberRepository.findAlll is not a function"
      );
    }
  });
});
