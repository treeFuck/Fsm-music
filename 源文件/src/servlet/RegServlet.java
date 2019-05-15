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
 * Servlet implementation class RegServlet
 */
public class RegServlet extends HttpServlet {
	private static final long serialVersionUID = 5280356329609002908L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		// 获取用户名
		String username = request.getParameter("name");
		// 获取密码
		String password = request.getParameter("pass");
		// 实例化UserDao对象
		System.out.print("用户名: "+username+"密码: "+password);
		UserDao userDao = new UserDao();
		if(username != null && !username.isEmpty() && password != null && !password.isEmpty()){
			if(userDao.userIsExist(username)){				
				User user = new User();// 实例化一个User对象						ֵ
				user.setUsername(username);//  对用户对象中的属性赋值	
				user.setPassword(password);
				userDao.saveUser(user);	// 保存用户注册信息
				out.print("success");
				System.out.print("【注册成功】  This user registered successfully ");
			}else{
				out.print("existed");
				System.out.print("【该用户已经存在】  This user already existed ");
			}			
		}else {
			out.print("error");
			System.out.print("【输入错误】  Input error");
		}
		out.flush();
        out.close();
	}

}
