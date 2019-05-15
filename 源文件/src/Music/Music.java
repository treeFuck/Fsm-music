package Music;

public class Music {
	public String mName;   //歌曲名
	public String mSinger; //歌手
	public String mPlay;   //播放量
	public String mSrc;    //歌曲地址
	public String iSrc;    //图片地址
	
	public String getmName() {
		return mName;
	}
	public String getmSinger() {
		return mSinger;
	}
	public String getmPlay() {
		return mPlay;
	}
	public String getmSrc() {
		return mSrc;
	}
	public String getiSrc() {
		return iSrc;
	}
	
	public void setmName(String mName) {
		this.mName = mName;
	}
	public void setmSinger(String mSinger) {
		this.mSinger = mSinger;
	}
	public void setmPlay(String mPlay) {
		this.mPlay = mPlay;
	}
	public void setmSrc(String mSrc) {
		this.mSrc = mSrc;
	}
	public void setiSrc(String iSrc) {
		this.iSrc = iSrc;
	}
}
