class RoomsController < ApplicationController
  before_action :authenticate_user!
  def create
    @room = Room.new(room_params)
    @room.save
    redirect_to root_path

  end
  def index
    @room = Room.new
    @rooms = Room.all
  end
  def show
    @room = Room.find(params[:id])
    @messages = @room.messages
  end

  private
  def room_params
    params.require(:room).permit(:name)
  end
end
