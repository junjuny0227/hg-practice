import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Toggle,
} from "@/components";

const Main = () => {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="w-[100px] text-zinc-900">0189</TableCell>
            <TableCell className="w-[130px]">
              <Toggle>제출 완료</Toggle>
            </TableCell>
            <TableCell className="w-[154px] font-semibold text-zinc-900">
              진예원 <br />
              <span className="font-normal text-zinc-600">010 1234 5678</span>
            </TableCell>
            <TableCell className="w-[154px] text-zinc-600">
              대성여자중학교
            </TableCell>
            <TableCell className="max-w-full text-zinc-900">일반전형</TableCell>
            <TableCell className="w-[96px]">
              <Badge variant="미정">미정</Badge>
            </TableCell>
            <TableCell className="w-[180px]  text-zinc-400">진행 전</TableCell>
            <TableCell className="w-[180px]  text-zinc-400">진행 전</TableCell>
            <TableCell className="w-[96px]">
              <Badge variant="미정">미정</Badge>
            </TableCell>
            <TableCell className="w-[149px]">
              <Button className="ml-[45px]" variant="outline">
                원서수정
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Main;
