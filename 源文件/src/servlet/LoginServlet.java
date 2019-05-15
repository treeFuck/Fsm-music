package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import User.User;
import dao.UserDao;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = -3009431503363456775L;
    
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		//获取客户端请求的参数，并进行判断.
        //如果用户存在，返回用户名,否则，返回"error".
		PrintWriter out = response.getWriter();
		
		String username = request.getParameter("name");// 获取用户名	
		String password = request.getParameter("pass");// 获取密码
		
		if(password != null && !password.isEmpty()){
			UserDao userDao = new UserDao();	               // 实例化UserDao	
			User user = userDao.login(username, password);     // 根据用户密码查询用户
			if(user != null){
				out.print("success");
				System.out.print("【用户存在，可以登陆】user "+user.username+"  exists");
			}else{
				out.print("no-existed");	
				System.out.print("【密码错误，无法登陆】user "+username+"'password  error");
			}
		}else {
			out.print("error");
			System.out.print("【输入为空】");
		}
		
		out.flush();
		out.close();
	}

}
