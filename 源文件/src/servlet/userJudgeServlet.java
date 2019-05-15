package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.UserDao;

/**
 * Servlet implementation class userIsExist
 */
public class userJudgeServlet extends HttpServlet {
	private static final long serialVersionUID = 4280356329609002908L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		// 获取用户名
		String username = request.getParameter("name");
		UserDao userDao = new UserDao();
		System.out.print("用户名: "+username +"<br>");
		if(username != null && !username.isEmpty()){
			if(userDao.userIsExist(username)){				
				out.print("no-exist");
				System.out.print("该用户不存在");
			}else{
				out.print("existed");
				System.out.print("该用户已经存在");
			}			
		}else {
			out.print("error");
			System.out.print("输入错误");
		}
		out.flush();
        out.close();
	}

}