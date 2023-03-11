package sesac.spring.api.sesacapi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import sesac.spring.api.sesacapi.dto.UserDTO;
import sesac.spring.api.sesacapi.vo.UserVO;

@Controller
public class MainController {
	@GetMapping("/")
	public String main(){
		return "request";
	}
	@GetMapping("/get/response1")
	public String getAPI1(@RequestParam(value = "name") String name2, Model model){
		model.addAttribute("name", name2);
		return "response";
	}
	@GetMapping("/get/response2")
	public String getAPI2(@RequestParam(value = "name", required = false) String name2, Model model){
		model.addAttribute("name", name2);
		return "response";
	}
	@GetMapping("/get/response3/{name}/{age}")
	public String getAPI3(@PathVariable String name, @PathVariable("age") String abc, Model model){
		model.addAttribute("name", name);
		model.addAttribute("age", abc);
		return "response";
	}


	@GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
	public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){
		model.addAttribute("name", name);
		model.addAttribute("age", abc);
		return "response";
	}

	@PostMapping("/post/response1")
	public String postAPI1(@RequestParam String name, Model model){
		model.addAttribute("name", name);
		return "response";
	}
	@PostMapping("/post/response2")
	public String postAPI2(@RequestParam(required = false) String name, Model model){
		model.addAttribute("name", name);
		return "response";
	}
	@PostMapping("/post/response3")
	@ResponseBody // res.send
	public String postAPI3(@RequestParam(required = false) String name){
		return "이름은 : " + name;
	}

	@GetMapping("/dto/response1")
	@ResponseBody
	public String dtoAPI1(UserDTO userDTO){
		String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
		return msg;
	}

	@PostMapping("/dto/response2")
	@ResponseBody
	public String dtoAPI2(UserDTO userDTO){
		String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
		return msg;
	}

	@PostMapping("/dto/response3")
	@ResponseBody
	public String dtoAPI3( @RequestBody UserDTO userDTO){
		String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
		return msg;
	}

	@GetMapping("/vo/response1")
	@ResponseBody
	public String voAPII1(UserVO userVO) {
		String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
		return msg;
	}
	@PostMapping("/vo/response2")
	@ResponseBody
	public String voAPI2(UserVO userVO) {
		String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
		return msg;
	}
	@PostMapping("/vo/response3")
	@ResponseBody
	public String voAPI3(@RequestBody  UserVO userVO) {
		String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
		return msg;
	}

	@GetMapping("/axios/response1")
	@ResponseBody
	public String axiosAPI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
		String msg = "이름 : " + name + "\n나이 : " + age;
		return msg;
	}
	@GetMapping("/axios/response2")
	@ResponseBody
	public String axiosAPI2(UserDTO userDTO) {
		String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
		return msg;
	}
	@PostMapping("/axios/response3")
	@ResponseBody
	public String axiosAPI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
		String msg = "이름 : " + name + "\n나이 : " + age;
		return msg;
	}
	@PostMapping("/axios/response4")
	@ResponseBody
	public String axiosAPI4(UserDTO userDTO) {
		String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
		return msg;
	}
	@PostMapping("/axios/response5")
	@ResponseBody
	public String axiosAPI5(@RequestBody  UserDTO userDTO) {
		String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
		return msg;
	}

	// VO - axios
	@GetMapping("/axios/vo/response1")
	@ResponseBody
	public String axiosvoAPI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
		String msg = "이름 : " + name + "\n나이 : " + age;
		return msg;
	}
	@GetMapping("/axios/vo/response2")
	@ResponseBody
	public String axiosvoAPI2(UserVO userVO) {
		String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
		return msg;
	}
	@PostMapping("/axios/vo/response3")
	@ResponseBody
	public String axiosvoAPI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
		String msg = "이름 : " + name + "\n나이 : " + age;
		return msg;
	}
	@PostMapping("/axios/vo/response4")
	@ResponseBody
	public String axiosvoAPI4(UserVO userVO) {
		String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
		return msg;
	}
	@PostMapping("/axios/vo/response5")
	@ResponseBody
	public String axiosvoAPI5(@RequestBody UserVO userVO) {
		String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
		return msg;
	}
}
