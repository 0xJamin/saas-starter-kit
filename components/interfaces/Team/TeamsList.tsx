import { Card, LetterAvatar } from "@/components/ui";
import { Team } from "@prisma/client";

const TeamsList = ({ teams }: { teams: any }) => {
  return (
    <Card heading="Your Teams">
      <Card.Body>
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {teams.map((team) => {
              return (
                <tr
                  key={member.id}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-3">
                    <div className="flex items-center justify-start space-x-2">
                      <LetterAvatar name={member.user.name} />
                      <span>{member.user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">{member.user.email}</td>
                  <td className="px-6 py-3">{member.role}</td>
                  <td className="px-6 py-3">
                    {member.user.createdAt.toISOString()}
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export default TeamsList;