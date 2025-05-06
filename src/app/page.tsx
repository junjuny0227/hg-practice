import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";

const Main = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="성적 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="A">A</SelectItem>
          <SelectItem value="B">B</SelectItem>
          <SelectItem value="C">C</SelectItem>
          <SelectItem value="D">D</SelectItem>
          <SelectItem value="E">E</SelectItem>
          <SelectItem value="None">없음</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Main;
